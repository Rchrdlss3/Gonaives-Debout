import { buttonStyle, visionCardStyle } from "../../helper/styles";

export default function VisionCard({title,theme}) {
  return (
    <div>
        <div style = {visionCardStyle(theme)}>
             <h3>{title}</h3>
             <p style = {{
               padding: '5px'
             }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam.
              </p>
             <button
             style = {buttonStyle(theme)}
             >Read More</button>
        </div>
    </div>
  );
}