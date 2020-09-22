const styles = {
  CheckoutProduct__wrapper: {
    width: 'calc(100% + 8px)',
    border: '1.2px solid #d7d7d7',
    padding: '1rem',
    margin: '0.3rem 0',
  },
    CheckoutProduct__img: {
      width: "180px",
      height: '180px',
      objectFit: 'contain'
    },
    CheckoutProduct__remove__button: {
      backgroundColor: "#f2c85f",
      margin: "0.6rem 0",
      fontSize: 12,
      "&:hover": {
        backgroundColor: "#ffdb80",
      },
    },
    CheckoutProduct__rating: {
      display: 'flex'
    },
    CheckoutProduct__ratingIcon: {
        color: '#f3af05'
    }
  };
  
  export default styles;
  