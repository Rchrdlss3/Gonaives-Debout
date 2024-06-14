import { FILLER_TEXT } from "../../helper/commonhelper";
import HistoryHeader from "./HistoryHeader";

export default function HistoryComponent({theme}) {
    return (
        <div style = {{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '5%'
        }}>
            <div style = {{
                        width: '70%',
                        height: '500px',
                        overflowX: 'auto',
                        border: `1px solid ${theme.secondary}`,
                        borderRadius: '5px',
                        padding: '10px'
            }}>
                <HistoryHeader title = "What Motivated Us"/>
              <p>
                  {FILLER_TEXT}
            <HistoryHeader title = "Our Beginning" /> 
            <p>
            {FILLER_TEXT}            </p>    
            <HistoryHeader title = "Trials" /> 
            <p>
            {FILLER_TEXT}            </p>    
            </p>   
            <HistoryHeader title = "Currently..." /> 
            <p>
            {FILLER_TEXT}            </p>             
            </div>
        </div>
    )
}