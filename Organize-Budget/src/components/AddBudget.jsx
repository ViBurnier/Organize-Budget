import { ArrowBigRightDash } from "lucide-react";

function AddBudGet(){

    return(
        <div className="w-full bg-gray-500 p-2 ">
            <div className="space-y-5 columns-2">
                <input placeholder="TITLE" className="bg-white rounded-sm p-2 w-full" type="text" name="titleB" id="nameB" />
                <input placeholder="DATE" className="bg-white rounded-sm p-2 w-full" type="text" name="dateB" id="dateB" />
                <input placeholder="PRICE" className="bg-white rounded-sm p-2 w-full" type="text" name="priceB" id="priceB" />
                <input placeholder="DESCRIPTION" className="bg-white rounded-sm p-2 w-full" type="text" name="descriptionB" id="descriptionB" />
            </div>

            <button>
                <ArrowBigRightDash />
            </button>
        </div>
    )

}

export default AddBudGet;