import BrandComponent from "@/components/userDashboard/BrandComponent.jsx";
import { setTopBrands } from "@/redux/slices/topBrandsSlice";
import { getTopBrands } from "@/services/topBrands/topBrandsService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TopBrandsComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { topBrands } = useSelector((store) => store.topBrands);

    // useEffect
    useEffect(() => {
        let isMounted = true;
        const getTopBrandsFeed = async() => {
            try{
                const topBrands = await getTopBrands();
                console.log(topBrands);
                if(isMounted){
                    dispatch(setTopBrands(topBrands));
                }
            }
            catch(error){
                console.log("Error Getting Top Brands : " , error.message);
            }
        }
        getTopBrandsFeed();
        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <>
            <div className="my-8">
                {/* Top Brands Sections */}
                <h1 className="text-4xl mb-6 text-white tracking-wider roboto-regular">Top brands for you</h1>
                {/* Brands Section */}
                <div className="flex flex-wrap justify-start gap-2">
                    {topBrands.map((topBrand) => (
                        <BrandComponent 
                            key={topBrand.topBrandId}
                            image={topBrand.image}
                            name={topBrand.name}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default TopBrandsComponent;