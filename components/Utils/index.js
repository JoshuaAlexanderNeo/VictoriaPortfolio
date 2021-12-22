const isCurrentPage = (asPath, page) => {
    if(asPath === page || (asPath === '' && page === 'Home')) {
      return true;
    }
    return false;
  }

export default isCurrentPage;