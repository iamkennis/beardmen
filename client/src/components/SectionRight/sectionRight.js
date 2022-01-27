import ImageRight from '../../assets/imageright.jpg'
import './sectionRight.css'


function SectionRight()
{
    return (
        <div>
                <div className='section__right'>
                    <div className='section__right-text'>
                        <h1 className='section__h1-right'>You get top-<br /> shelf products.</h1>
                        <ul className='section__ul-right'>
                         <li>Fine products line</li>
                        <li>Made with premium ingredients</li>
                        <li>Mix and match to find your perfect routine</li>
                    </ul>
                </div>

                  <img className='section__img-right' src={ImageRight} alt='' />
                </div>
        </div>
    )
}

export default SectionRight