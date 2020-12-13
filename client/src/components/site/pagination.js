import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";

const Pagi = (props) => {
  const { onPageChange } = props;
  const changePage = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  return (
    <Pagination
      aria-label="Page navigation example"
      style={{ justifyContent: "center" }}
    >
      <PaginationItem>
        <PaginationLink onClick={() => changePage(1)}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => changePage(2)}>2</PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

Pagi.propTypes = {
  onPageChange: PropTypes.func,
};

Pagi.defaultProps = {
  onPageChange: null,
};

export default Pagi;
