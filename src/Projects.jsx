import github_logo from './assets/img/github-mark/github-mark.png' 
import Markdown from 'react-markdown'
import projectsMD from './assets/md/projects.md?raw'
import './Projects.css'

// Video imports for happy-birthday gifts
// NOTE: I compressed the original stars.mp4 using veed.io
// This brought it below the 100MiB github filesize limit
import cake from './assets/video/cake.mp4'
import stars from './assets/video/stars.mp4'
import formscan from './assets/video/formscan.mp4'

import sierpinski from './assets/img/fp-competition-2019.png'
import sierpinski_concave from './assets/video/sierpinski-concave.mp4'
import sierpinski_convex from './assets/video/sierpinski-convex.mp4'

import sewers from './assets/video/sewers.mp4'
import boardgame from './assets/video/boardgame.mp4'

const GITHUB_LINK = "https://github.com/Thanakrit-Anutrakulchai/"

function delegateMedia(props) {
    const {node, ...rest} = props
    if (rest.alt === 'sierpinski') {
        return <div align="center"><img width="400px" src={sierpinski}></img></div>
    } else if (rest.alt === 'sierpinski-vids') {
        return  <div align="center">
            <video controls width="400px">
                <source src={sierpinski_concave} type='video/mp4'></source>
            </video>
            <video controls width="400px">
                <source src={sierpinski_convex} type='video/mp4'></source>
            </video>
        </div>
    } else if (rest.alt === 'github') {
        return <a href={GITHUB_LINK + rest.src}>
            <img src={github_logo} width={25} />
        </a>
    } else if (rest.alt === 'bdays') {
        return <div align='center'>
            <video controls width="400px">
                <source src={cake} type='video/mp4'></source>
            </video>
            <video controls width="400px">
                <source src={stars} type='video/mp4'></source>
            </video>
        </div>
    } else if (rest.alt === 'formscan') {
        return <div align='center'>
            <video controls width="800px">
                <source src={formscan} type='video/mp4'></source>
            </video>
        </div>
    } else if (rest.alt === 'sewers') {
        return <div align='center'>
            <video controls width="800px">
                <source src={sewers} type='video/mp4'></source>
            </video>
        </div>
    } else if (rest.alt === 'boardgame') {
        return <div align='center'>
            <video controls width="800px">
                <source src={boardgame} type='video/mp4'></source>
            </video>
        </div>
    } else {
        return <img src={rest.src}></img>
    }
}

function Projects() {
    return (
        <>
            <h1>Brief descriptions of some of my projects.</h1>
            <hr />
            <Markdown className="md" components={{img: delegateMedia}}>
                {projectsMD}
            </Markdown>
            <hr />
            <h1>You can find some of these projects on GitHub.</h1>
            <a href={GITHUB_LINK}>
                <img src={github_logo} width={30} />
            </a>
            <a href={GITHUB_LINK}>
                Github
            </a>
        </>
    )
}

export default Projects
