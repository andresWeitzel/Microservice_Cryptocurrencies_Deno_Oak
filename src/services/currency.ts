//External
import axiod from "https://deno.land/x/axiod/mod.ts";
//Vars
let axiosResponse:any;
let responseData:any;
let url:string;
//Const
const URL_BASE="https://api.simpleswap.io/get_currency?"

export const getCurrencyType = async (apiKey:string, symbol:string) => {
    try {
  
        url = URL_BASE + apiKey + "&symbol="+symbol;

        responseData = axiod.get(url).then((response:any) => {
        // handle success
        console.log(response);
      })
      .catch((error:any) => {
        // handle error
        console.log(error);
      });
  
    } catch (error) {
      console.log(error);
      responseData = null;
    }
    return responseData;
  };
  