import React from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Pagination.css';

class Pagination extends React.Component {
  static propTypes = {
    cardItems: PropTypes.instanceOf(Array).isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSizeNumber: PropTypes.number.isRequired,
  };
  static defaultProps = {
    initialPage: 1,
  };
  constructor(props) {
    super(props);
    this.state = { pagers: {} };
  }

  componentWillMount() {
    // set page if items array isn't empty
    if (this.props.cardItems && this.props.cardItems.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps) {
    // reset page if items array has changed
    if (this.props.cardItems !== prevProps.cardItems) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    const items = this.props.cardItems;
    let pager = this.state.pagers;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, this.props.pageSizeNumber);

    // get new page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pagers: pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, cp, ps) {
    // default to first page
    const currentPage = cp || 1;
    this.setState({});
    // default page size is 10
    const pageSize = ps || 10;

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage;
    let endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i,
    );

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  }

  render() {
    const pager = this.state.pagers;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <div className={s.pagination}>
        <div className={pager.currentPage === 1 ? 'disabled' : ''}>
          <button onClick={() => this.setPage(1)}>First</button>
        </div>
        <div className={pager.currentPage === 1 ? 'disabled' : ''}>
          <button onClick={() => this.setPage(pager.currentPage - 1)}>
            Previous
          </button>
        </div>
        {pager.pages.map(page => (
          <div className={pager.currentPage === page ? s.active : ''}>
            <button onClick={() => this.setPage(page)}>{page}</button>
          </div>
        ))}
        <div
          className={pager.currentPage === pager.totalPages ? 'disabled' : ''}
        >
          <button onClick={() => this.setPage(pager.currentPage + 1)}>
            Next
          </button>
        </div>
        <div
          className={pager.currentPage === pager.totalPages ? 'disabled' : ''}
        >
          <button onClick={() => this.setPage(pager.totalPages)}>Last</button>
        </div>
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(Pagination);
