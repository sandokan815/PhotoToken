import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MarketPlace.css';
import Pagination from './Pagination/Pagination';
import MarketPlaceCard from './MarketPlaceCard/MarketPlaceCard';
import metaData from './DumyData';

class MarketPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: [],
      pageOfItems: [],
      sortDir: 'asc',
      sortName: null,
      subjectFilter: '',
      sellerFilter: '',
    };

    this.onChangePage = this.onChangePage.bind(this);
    this.onSortByName = this.onSortByName.bind(this);
    this.onChangeFilter = this.onChangeFilter.bind(this);
  }
  componentWillMount() {
    this.setState({ totalItems: metaData });
  }
  onSortByName(e) {
    this.setState({ sortName: e.currentTarget.value }, function() {
      const listSortedByName = this.state.totalItems.slice(0);
      const sortVal = this.state.sortDir === 'asc' ? 1 : -1;
      listSortedByName.sort(
        (a, b) =>
          a[this.state.sortName] > b[this.state.sortName]
            ? sortVal
            : -1 * sortVal,
      );
      this.setState({ totalItems: listSortedByName });
    });
  }
  onSortByDirection(e) {
    this.setState({ sortDir: e.currentTarget.value });
    this.onSortByName({ currentTarget: { value: this.state.sortName } });
  }

  onChangePage(items) {
    // update state with new page of items
    this.setState({ pageOfItems: items });
  }
  onChangeFilter(e, filter) {
    this.setState({ [filter]: e.currentTarget.value }, function() {
      const filtered = metaData.filter(
        c =>
          c.seller.indexOf(this.state.sellerFilter) !== -1 &&
          c.subject.indexOf(this.state.subjectFilter) !== -1,
      );
      this.setState({
        totalItems: filtered,
      });
    });
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>Marketplace</div>
          <div className={s.condition}>
            <div className={s.sortContainer}>
              <p>Sort by :</p>
              <select onChange={e => this.onSortByName(e)}>
                <option>Choose here</option>
                <option value="price">Price</option>
                <option value="subject">Subject</option>
              </select>
              <select onChange={e => this.onSortByDirection(e)}>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
            <div className={s.filterContainer}>
              <div className={s.subFilter}>
                <p>Seller:</p>
                <input
                  type="text"
                  value={this.state.sellerFilter}
                  onChange={e => this.onChangeFilter(e, 'sellerFilter')}
                />
              </div>
              <div className={s.sellFilter}>
                <p>Filter by Subject:</p>
                <input
                  type="text"
                  value={this.state.subjectFilter}
                  onChange={e => this.onChangeFilter(e, 'subjectFilter')}
                />
              </div>
            </div>
          </div>
          {this.state.totalItems.length !== 0 && (
            <div className={s.marketBody}>
              {this.state.pageOfItems.map(item => (
                <MarketPlaceCard {...item} />
              ))}
            </div>
          )}
          {this.state.totalItems.length !== 0 && (
            <Pagination
              cardItems={this.state.totalItems}
              onChangePage={this.onChangePage}
              pageSizeNumber={3}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(MarketPlace);
