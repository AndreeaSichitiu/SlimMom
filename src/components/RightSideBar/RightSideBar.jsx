// import { useSelector } from "react-redux";
import css from './RightSideBar.module.css';

export const RightSideBar = () => {

    // const date = useSelector((state) => state.products.date);
    // const dailyRate = useSelector((state) => state.auth.userInfo.dailyRate);
    // const notAllowedProducts = useSelector((state) => state.auth.userInfo.notAllowedProducts);
    // const productsList = useSelector((state) => state.products.productsList);
    // const totalCalories = productsList.map(product => product.productCalories)
    //     .reduce((prev, product) => { return Number.parseInt(prev) + Number.parseInt(product) }, 0);
    // const leftCalories = dailyRate - totalCalories;
    // const nOfNorm = (totalCalories / dailyRate) * 100;

    return (
        <section className={css.sidebarSection}>
            <div className={css.foodSummary}> 
                <h3 className={css.mainTitle}>Summary for </h3>
                <ul>
                    <li className={css.foodList}>
                        <p className={css.mainText}>Left</p>                         
                        <p className={css.secondaryText}>  kcal</p> 
                        
                    </li>
                    <li>
                        <p className={css.mainText}>Consumed</p>
                        <p className={css.mainText}>  kcal</p>
                    </li>
                    <li>
                        <p className={css.mainText}>Daily rate</p>
                        <p className={css.mainText}>  kcal</p>
                    </li>
                    <li>
                        <p className={css.mainText}>n% of normal</p>                     
                        <p className={css.secondaryText}>  %</p> 
                        
                    </li>
                </ul>
            </div>
            <div className={css.foodDiet}>
                <h3 className={css.mainTitle}>Food not recommended</h3>
                
                    {/* <ul>
                        {notAllowedProducts.map((prod, index) => (
                            <p className={css.mainText} key={index}>
                                {index + 1}. {prod}
                            </p>
                        ))}
                    </ul> : */}
                    <p className={css.mainText}>Your diet will be displayed here</p>
                
            </div>
        </section>
    )
};