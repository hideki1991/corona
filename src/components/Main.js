import React from 'react'
import ChartsWithData from "../containers/ChartsWithData";
import ChartsRatioWithData from "../containers/ChartsRatioWithData";
import TogglesWithData from "../containers/TogglesWithData";


const Main =({perPop})=> (
    <div>
        {!perPop ?
            <ChartsWithData/>:
            <ChartsRatioWithData/>
        }
    </div>
)

export default Main
