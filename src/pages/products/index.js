import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import Stack from "@/components/Stack";
// import { userouter, userouter.push } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import LoadingSpinner from "@/components/LoadingSpinner";
import Breadcrumb from "@/components/BreadCrumb";
import HandleSortingOptions from "@/components/HandleSortingOptions";
import { BACKEND_URL } from "@/utils/BackendURL";
import { useRouter } from "next/router";
import ProductsGrid from "@/components/ProductGrid";
import NoProductFoundMessage from "@/components/NoProductFound";
import BackgroundLayout from "@/layouts/BackgroundLayout";
import { useGetProducts } from "@/reducers/slice/product.slice";
import ThemeContext from "@/themes/ThemeContext";
import Typography from "@/components/Typography";

const Products = () => {
  //   useEffect(() => {
  //     // Scroll to the top of the page
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }, []);

  const { theme } = useContext(ThemeContext);

  const router = useRouter();
  const allProducts = useGetProducts();

  useEffect(() => {
    setProducts(allProducts);
  }, []);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isProductCategoriesOpen, setProductCategoriesOpen] = useState(true);

  const productCategories = allProducts.reduce((categories, product) => {
    const category = product?.category;
    if (category && !categories.includes(category)) {
      return [...categories, category];
    }
    return categories;
  }, []);

  const entriesPerPage = 12;
  const totalEntries = products?.length || 0;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const endIndex = Math.min(currentPage * entriesPerPage, totalEntries);
  const currentItems = products?.slice(startIndex, endIndex) || [];

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const filterProductsByCategory = (category) => {
    setProductCategoriesOpen(true);
    setSelectedCategory(category);
    console.log(category);
    setProducts(
      allProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    );
  };

  const resetCategory = () => {
    setProductCategoriesOpen(false);
    setSelectedCategory(null);
    router.push("/products");
  };

  const handleSortChange = (selectedSortOption) => {
    const [sortBy, sortOrder] = selectedSortOption.split(" : ");
    const sortedProducts = [...products];

    if (sortBy === "price") {
      sortedProducts.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        if (sortOrder === "low to high") {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
    }

    setProducts(sortedProducts);
  };

  return (
    <BackgroundLayout>
      <Stack
        direction="column"
        alignItems="center"
        className={"mt-6 mb-10 px-0 lg:px-12"}
      >
        <div className="flex flex-col items-center text-center ">
          <Typography
            variant={theme === "dark" ? "undefined" : "black"}
            className={
              "md:text-[40px] text-[25px] font-normal capitalize font-Artifika leading-tight  "
            }
          >
            {selectedCategory !== null ? selectedCategory : "All Products"}
          </Typography>

          {/* <Breadcrumb /> */}
        </div>
        <Stack
          direction="row"
          alignItems="center"
          className={"flex md:items-start gap-6  pb-3"}
        >
          {/* Left */}

          <div className="md:flex flex-col mt-7 gap-4 items-center w-full md:w-[300px] lg:w-[300px] hidden ">
            {/* Product Categories */}
            <div className="w-full h-full">
              <div className="toggle-btn flex flex-col items-start gap-3">
                <button
                  onClick={() => {
                    setProductCategoriesOpen(!isProductCategoriesOpen);
                  }}
                  className="flex w-full justify-between items-center gap-2"
                >
                  <h2 className="text-[16px] md:text-[12px] lg:text-[16px] font-[600] font-OpenSans">
                    PRODUCT CATEGORIES
                  </h2>
                  <span>
                    {isProductCategoriesOpen ? (
                      <MdKeyboardArrowUp size={23} />
                    ) : (
                      <MdKeyboardArrowDown size={23} />
                    )}
                  </span>
                </button>
                <div className="w-full relative rounded-full h-[1px] mb-4 ">
                  <div
                    className="bg-green-600 h-1.5 absolute -bottom-[2.5px] left-0 rounded-full"
                    style={{ width: isProductCategoriesOpen ? "100%" : "15%" }}
                  ></div>
                </div>
              </div>
              <div
                className={`dropdown-content flex flex-col gap-3 items-start overflow-hidden transition-all duration-300 ease-in-out ${
                  isProductCategoriesOpen ? "h-auto" : "h-0"
                }`}
              >
                {productCategories.map((category, index) => {
                  return (
                    <div key={index}>
                      <CategoryButton
                        label={category}
                        isDefault={true}
                        count={
                          allProducts.filter(
                            (product) => product.category === category
                          ).length
                        }
                        onClick={() => {
                          setSelectedCategory(category);
                          filterProductsByCategory(category);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col w-full mt-3 lg:w-[900px]   items-center">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="spacebetween"
              className={" border-b-[D9D9D9] border-b-[1px] pb-3"}
            >
              <div className="flex flex-row gap-2 items-center">
                <h2 className="text-[16px] font-[400] font-OpenSans">
                  Showing {startIndex + 1} to {endIndex} of {totalEntries}{" "}
                  Entries
                </h2>
              </div>
              <HandleSortingOptions onSortChange={handleSortChange} />
            </Stack>

            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                {Array.isArray(products) && products.length === 0 ? (
                  <NoProductFoundMessage />
                ) : (
                  <Stack direction="column" alignItems="center">
                    <div className="justify-center items-center flex  w-full h-full pt-6 mb-10">
                      {/* <div className="flex flex-wrap gap-14 items-center  justify-center lg:justify-start lg:items-start w-full"> */}
                      <div className=" grid grid-cols-2  w-full lg:grid-cols-3 md:grid-cols-2 gap-4 items-center  justify-center">
                        {currentItems.map((data, i) => (
                          <ProductsGrid key={i} data={data} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        previousLinkClassName={"paginationLink"}
                        nextLinkClassName={"paginationLink"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"active"}
                      />
                    </div>
                  </Stack>
                )}
              </>
            )}
          </div>
        </Stack>
      </Stack>
    </BackgroundLayout>
  );
};

export default Products;

const CategoryButton = ({ label, count, onClick }) => (
  <button
    onClick={onClick}
    className="py-[2px] capitalize items-start text-start w-full text-[14px] font-[500] font-Poppins"
  >
    {`${label} (${count})`}

  </button>
);
