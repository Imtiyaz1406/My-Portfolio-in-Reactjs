import uok from '../imgs/university  of kmr.jpg';
import sp from '../imgs/SP-College-14-11-2022.jpg'
function Education() {
  return (
    <div className="edu">
      <h2>Education</h2>
      <div className="uok-edu">
        <img src={uok} alt="" className='uok-img' />
        <div className="uok-details">
          <h2>University of Kashmir</h2>
          <h3>Department : </h3>
          <h3>Information Technology and Support System ( IT & SS)</h3>
          <h3>MSc IT (2019 - 2022)</h3>
          <p>CGP (8.2)</p>
        </div>
      </div>
      <hr />

      <div className="uok-edu">
        <img src={sp} alt="" className='uok-img' />
        <div className="uok-details">
          <h2>University of Kashmir</h2>
          <h3>College :</h3>
          <h3>Sri Pratap Singh College Srinagar</h3>
          <h3>BSc(2015 - 2019)</h3>
          <p>CGP (7.4)</p>
        </div>
      </div>



    </div>
  )
}
export default Education;