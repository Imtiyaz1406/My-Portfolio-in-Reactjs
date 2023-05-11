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
          <h4>Department : </h4>
          <h3>Information Technology and Support System ( IT & SS)</h3>
          <h4>MSc IT (2019 - 2022)</h4>
          <h5>CGP (8.2)</h5>
        </div>
      </div>
      <hr />

      <div className="uok-edu">
        <img src={sp} alt="" className='uok-img' />
        <div className="uok-details">
          <h2>University of Kashmir</h2>
          <h4>College :</h4>
          <h3>Sri Pratap Singh College Srinagar</h3>
          <h4>BSc(2015 - 2019)</h4>
          <h5>CGP (7.4)</h5>
        </div>
      </div>



    </div>
  )
}
export default Education;