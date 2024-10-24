import ProjectImage from "./ProjectImages";

export default function ProjectsCard() {
    const projectImages = [];
    for (let i = 0; i<3; i++) {
        projectImages.push(<ProjectImage />)
    }
    return (
        <div style = {{
            width: '90%',
            height: '200px',
            flexShrink: 0,
            border: '1px solid',
            borderRadius: '5px'
        }}>
            <h3>Project X</h3>
            <div style = {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap : 5
            }}>
            {projectImages}
            </div>
            <p>Description of project here</p>
        </div>
    )
}