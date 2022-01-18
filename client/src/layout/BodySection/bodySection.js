import './bodySection.css'
import bodysect from '../../assets/bodysect.jpg'
import { Link } from 'react-router-dom'
import SectionRight from '../../components/SectionRight/sectionRight'
import SectionLeft from '../../components/SectionLeft/sectionLeft'
import CustomButton from '../../components/CustomButton/customButton'


function BodySection () {
    return (
        <main>
            <section className='section__h1'>
                <h1 >Another way to enjoy the best beard Products</h1>
            </section>
            <section className='section__main'>
                <section className='section__container'>
                    <h1 className='section__btn-h1'>
                        Need a smooooth <br /> shave?
                </h1>
                    <p className='section__btn-p'>Try our most popular starter set,<br/> and exprience the best in your product</p>
                    <section className='section__btn'>
                        <Link to='/shop'>
                            <CustomButton>Try for $10</CustomButton>
                        </Link>
                    </section>
                </section>
                
                <section>
                    <img className='section__img' src={ bodysect } alt='' />
                </section>
            </section>
            <div className='section__h1' >
                <h1 >Why join the Club</h1>
              </div>
            <div className="section__side">
                <SectionRight/>
            <SectionLeft/>
            </div>
        </main>
    );
}

export default BodySection;