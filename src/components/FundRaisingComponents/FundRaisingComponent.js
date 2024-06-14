import { FILLER_TEXT } from "../../helper/commonhelper";
import { buttonStyle } from "../../helper/styles";

export default function FundRaisingComponent({theme}) {
    return (
        <div>
            <button style = {buttonStyle(theme)}>Click Here to Assist</button>
        <div style = {{
            textAlign: 'left',
            margin: '20px'
        }}>
            <h2>We Believe...</h2>
            <p>{FILLER_TEXT}</p>
            <h2>Here's How You Can Assist With Fund Raising</h2>
            {FILLER_TEXT}
            <h2>About</h2>
            {FILLER_TEXT}
            <h2>Would You Like to Help Us With Our Cause?</h2>
        </div>
        </div>

    )
}