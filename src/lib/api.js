/* React-specific entry point that automatically generates    hooks corresponding to the defined endpoints */    
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";     

// Define a service using a base URL and expected endpoints    
export const Api = createApi({      
  reducerPath: "Api",      
  baseQuery: fetchBaseQuery({        
    baseUrl: "http://localhost:8000/api",        
    prepareHeaders: async (headers) => {          
      return new Promise((resolve) => {            
        async function checkToken() {              
          const clerk = window.Clerk;              
          if (clerk) {                
            const token = await clerk.session?.getToken();                
            headers.set("Authorization", `Bearer ${token}`);                
            resolve(headers);              
          } else {                
            setTimeout(checkToken, 500);              
          }            
        }            
        checkToken();          
      });        
    },      
  }),      
  endpoints: (build) => ({        
    getAllProducts: build.query({          
      query: () => `/products`,        
    }),        
    getProductsBySearch: build.query({          
      query: (query) => `/products/search?search=${query}`,        
    }),        
    getProductsByCategory: build.query({           
      query: (categoryId) => `/products?categoryId=${categoryId}`,         
    }),
    getProductById: build.query({
      query: (id) => `/products/${id}`,
    }),
    getAllCategories: build.query({          
      query: () => `/categories`,        
    }),        
    createProduct: build.mutation({          
      query: (product) => ({            
        url: "/products",            
        method: "POST",            
        body: product,          
      }),        
    }), 
    getFilteredProducts: build.query({
      query: (filters) => {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== "") {
            params.append(key, value);
          }
        });

        return `/products?${params.toString()}`;
      },
    }),

       
    createOrder: build.mutation({          
      query: (order) => ({            
        url: "/orders",            
        method: "POST",            
        body: order,          
      }),        
    }),        
    getCheckoutSessionStatus: build.query({
  query: (sessionId) => `/payments/session-status?session_id=${sessionId}`,
}),

    getMyOrders: build.query({
      query: () => `/orders`,
    }),
      
  }),    
});        

// Export hooks for usage in functional components, which are    
// auto-generated based on the defined endpoints    
export const { 
  useGetAllProductsQuery, 
  useGetProductsBySearchQuery,
  useGetCheckoutSessionStatusQuery, 
  useGetProductsByCategoryQuery, 
  useGetAllCategoriesQuery,
  useGetProductByIdQuery, 
  useCreateOrderMutation, 
  useCreateProductMutation,
  useGetFilteredProductsQuery,
  useGetMyOrdersQuery,
} = Api;