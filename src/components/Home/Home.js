
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import collection_351 from '../assets/collection-351.jpg';
import collection_702 from '../assets/collection-702.jpg';
import billGates_188 from '../assets/dan-wynn_bill-gates-time_magazine-188.jpg';
import billGates_265 from '../assets/dan-wynn_bill-gates-time_magazine-265.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.firstPhotoToken}>
            <div className={s.content}>
              <div className={s.bigTitle}>OWN A PIECE OF HOLLYWOOD</div>
              <div className={s.comment}>Buy the exclusive rights to our unique and iconic photographs. Once you own the total reproduction rights, you can reproduce them in any way shape or form, and collect royalty fees forever.</div>
              <div className={s.normalTitle}> It's all yours! <span></span> </div>
              <div className={s.comment}>Be the highest bidder and earn your exclusive right to whatever photography you desire. Whether your intention is to collect to invest, or to collect for commercial use, Photo Token makes both possible. Even your grandkids can enjoy the benefits of your collectibles.</div>
              <div className={s.comment}>Click below to begin your unique collection. </div>
              <div>
                <a> <button className={s.button}> Start Now </button> </a> 
              </div>
              <div className={s.explain}>* Mass merchandising of celebrity photographs, requires permission from the celebrity or their estate.</div>
            </div>
            <div className={s.photoList}>
              <img src={collection_351}/>
              <div><a className={s.viewAll}> View All </a></div>
            </div>
          </div>
          <div className={s.secondPhotoToken}>
            <div>
              <img src={billGates_265}/>
            </div>
            <div className={s.whatPhotoToken}>
              <div className={s.normalTitle}> What is Photo Token?</div>
              <div className={s.comment}> Photo Token is the world's first decentralized iconic photography ownership auction, leasing, and marketplace.</div>  
              <div className={s.comment}> The copyright of famous photographs are auctioned through our Ethereum blockchain platform, which are then bought by the highest bidders. Our platform makes owning world renowned photographs accessible to the public. </div>
            </div>
          </div>
          <div className={s.whyPhotoToken}>
            <div className={s.normalTitle}>Why Photo Token?</div>
            <div className={s.comment}>Photo Token is more than just an auction house for iconic photographs, it is an ecosystem of photography copyrights safely stored on the Ethereum blockchain. What does this mean? Each photograph is a smart contract with a unique ID on the blockchain.</div>
          </div>
          <div className={s.futurePhotoToken}>
            <div className={s.normalTitle}>What is the future of Photo Token?</div>
            <div className={s.comment}>Photo Token is the world's first decentralized photography copyrights platform running on the Ethereum blockchain. You can buy, sell or lease your photo copyrights while you can trust that the ownership is tracked accurately on the blockchain. Photo Token's primary features are buying and selling iconic images, as smart contracts on the Ethereum blockchain. Our secondary function will introduce a complex leasing feature allowing copyright owners to collect royalties.</div>
          </div>
          <div className={s.startBidding}>
            <div className={s.comment_last}>Start bidding and get the chance to own some of the most famous photographs in the world!</div>
            <div>
              <a> <button className={s.button_last}> Start Now </button> </a> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
