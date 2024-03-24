import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        
        <div>
            <h2>Special Person</h2>            
            <section className="flex">
                    <p>Has: {asset}</p>
                    <p>Also has: {gift}</p>
            </section>
        </div>
    );
};

export default Special;