import React, {Fragment} from 'react'

const Header = () => {
  return (
    <Fragment>
        <nav className = 'navbar row'>
            <div className='col-12 col-md-3'>
                <div className= 'navbar-brand'>
                    <img src= "./images/logo.png" height="70" alt="PCS_Store logo"></img>
                    <p1>PCS Store</p1>
                </div>
            </div>

            <div className='col-12 col-md-6 mt=2 mt-md-0'>
                <div className='input-group'>
                    <input 
                    type="text" 
                    id= "search_field"
                    class="form-control"
                    placeholder='Cual producto busca?'>
                    </input>
                    <div class="input-group-append">
                        <button id="search_btn" class="btn">
                        
                            <i class="fa fa-search" aria-hidden="true"> </i>
                        </button>

                    </div>
                </div>

            </div>
            <div className='col-12 col-md-3 mt-1 mt-md=0 text-center'>
                <button id="login_btn">Inicie Sesión</button>
                <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
                <span className="ml-1" id="cart_count">2</span>
                </div>

        </nav>


    </Fragment>
  )
}

export default Header