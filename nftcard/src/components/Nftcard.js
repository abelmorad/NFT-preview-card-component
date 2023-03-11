import React, { Component } from 'react'
import ethIcon from '../images/icon-ethereum.svg'
import clockIcon from '../images/icon-clock.svg'
import Avatar from '../images/image-avatar.jpg'
import equilibrium from '../images/image-equilibrium.jpg'


export class Nftcard extends Component {
  render() {
    return (
      <div class="card-container">
           <section className="nft-card">
                <div className='card-content'>
                    <div className='image'>
                        <img className='eq-img' src={equilibrium}alt='equilibrium image'/>
                    </div>
                    <h2 className='eth-number'>Equilibrium #2597</h2>
                    <p>Out Equilibrium collection promotes balance and calm.</p>
                    <div className='eth-and-days'>
                        <div className='eth'>
                            <img className='eth-icon' src={ethIcon} alt="etc-icon"/>
                            <p>0.041 ETH</p>
                        </div>
                        <div className='days-left'>
                            <img className='clock-icon' src={clockIcon} alt="etc-icon"/>
                            <p>3 days left</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='creator'>
                        <img className='avatar' alt='avatarpicture' src={Avatar}/>
                        <p>Creation of <span className='name'>Abel Morad</span></p>
                    </div>
                </div>
           </section>
      </div>
    )
  }
}

export default Nftcard