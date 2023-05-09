import cheeg from '../imgs/cheeg.JPG';
import guessNoGame from '../imgs/Guess the no. Game.JPG'
import quotes from '../imgs/Generate quotes.JPG';
function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="cheeg">
          <h4>Project No.1</h4>
          <a href="https://cheeg-clone-using-bootstrap.vercel.app/"><img src={cheeg} alt="" className='cheeg-link' /></a>
          <h4>(Cheeg Clone)</h4>
          <a href="https://github.com/Imtiyaz1406/Cheeg-clone-using-Bootstrap">Source Code</a>
        </div>

        <div className="cheeg">
          <h4>Project No.2</h4>
          <a href="https://guess-the-number-sage.vercel.app/"><img src={guessNoGame} alt="" className='cheeg-link' /></a>
          <h4>(Guess No. Game)</h4>
          <a href="https://github.com/Imtiyaz1406/Guess-Number-Gaame">Source Code</a>
        </div>

        <div className="cheeg">
          <h4>Project No.3</h4>
          <a href="https://generate-quotes.vercel.app/"><img src={quotes} alt="" className='cheeg-link' /></a>
          <h4>(Generate Random Quotes)</h4>
          <a href="https://github.com/Imtiyaz1406/Generate-Quotes">Source Code</a>
        </div>

      </div>
   
    </div>
  )
}
export default Projects;