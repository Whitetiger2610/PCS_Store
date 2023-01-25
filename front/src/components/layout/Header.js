import React, {Fragment} from 'react'

const Header = () => {
  return (
    <Fragment>
        <nav className = 'navbar row'>
            <div className='col-12 col-md-3'>
                <div className= 'navbar-brand'>
                    <img src= "./images/logo.png" alt="PCS_Store logo"></img>
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
                            Buscar
                            <i class="fa-fa-fa" aria-hidden="true"></i>
                        </button>

                    </div>
                </div>

            </div>
            <div className='col-12 col-md-3 mt-4 mt-md=0 text-center'>
                <button id="login_btn">Inicie Sesión</button>
                <span id="cart" className="ml-3">Carrito</span>
                <span className="ml-1" id="cart_count">2</span>
                </div>

        </nav>


    </Fragment>
  )
}

export default Header