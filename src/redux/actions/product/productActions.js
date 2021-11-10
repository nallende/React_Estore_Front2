import * as actionTypes from "./productTypes";
import axios from "axios";

export const getProductCategories = () => async (dispatch) => {
  let tempCat = [];
  await axios({
    method: "get",
    url: "https://back-estore-entrega.herokuapp.com/product/api/getCategories",
  })
    .then((res) => {
      console.log("RESPUESTA de la API", res.data);

      let parentCat = res.data.filter((x) => x.parentcategoryid === null);

      parentCat.map((item) => {
        let t = {
          Id: item.id,
          Category: item.category,
          SubCategory: res.data
            .filter((x) => x.parentcategoryid === item.id)
            .map((y) => {
              return {
                Id: y.id,
                Name: y.category,
              };
            }),
        };
        return tempCat.push(t);
      });
    })
    .catch((err) => {
      console.log("RESPONSE ERROR", err);
    });

  dispatch({
    type: actionTypes.PRODUCT_CATEGORY,
    data: tempCat,
  });
};

export const getProducts = () => async (dispatch) => {
  await axios({
    method: "get",
    url: "https://back-estore-entrega.herokuapp.com/product/api/getProducts",
  })
    .then((res) => {
      try {
        let productList = res.data.map((item) => {
          return {
            Id: item.id,
            categoryId: item.categoryid,
            imageSrc: `https://back-estore-entrega.herokuapp.com/${item.productimg}`,
            name: item.productname,
            price: item.price,
          };
        });
        dispatch(_getProducts(productList));
        dispatch(_getFilteredProducts(productList));
      } catch (ex) {
        console.log(ex);
      }
    })
    .catch((err) => {
      console.log("catch err", err);
    });

  // dispatch({
  //     type: actionTypes.PRODUCT,
  //     data: product
  // })
};

export const _getProducts = (data) => {
  return {
    type: actionTypes.PRODUCT,
    data,
  };
};

export const _getFilteredProducts = (data) => {
  return {
    type: actionTypes.FILTER_PRODUCT,
    data,
  };
};

export const applyFilter = (param, data) => async (dispatch) => {
  let query = buildQuery(param);
  console.log("Build Query", query);

  let filteredData = filterData(data.products, query);
  dispatch(_getFilteredProducts(filteredData));
};

const buildQuery = (filter) => {
  let query = {};
  for (let keys in filter) {
    query[keys] = filter[keys];
  }
  return query;
};

//metodo para filtrar la data
const filterData = (data, query) => {
  const filteredData = data.filter((item) => {
    for (let keys in query) {
      if (query[keys] === undefined) return false;
      else if (!query[keys].includes(item[keys])) return false;
    }
    return true;
  });

  return filteredData;
};
