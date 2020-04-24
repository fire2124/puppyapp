import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";
import authService from "../services/authService";

class MoviesTable extends Component {
  columns = [
    {
      path: "id",
      label: "ID",
      content: (movie) => (
        <Link to={`/dog/detail/${movie.id}`}>{movie.id}</Link>
      ),
    },
    {
      path: "gender",
      label: "Pohlavie",
    },
    {
      path: "breed",
      label: "Plemeno",
    },
    {
      path: "age",
      label: "Vek",
    },
    {
      path: "weight",
      label: "Váha",
    },
    {
      path: "height",
      label: "Výška",
    },
    {
      path: "vaccinated",
      label: "Očkovaný",
    },
    {
      path: "castrated",
      label: "Vykastrovaný",
    },
    {
      path: "dateRescued",
      label: "Dátum nájdenia psa",
    },
    {
      path: "placeRescued",
      label: "Miesto nájdenia",
    },
    {
      path: "rescueInfo",
      label: "Informácie k nájdeniu",
    },
    {
      path: "appearanceDescription",
      label: "Opis výzoru psa",
    },
    {
      path: "behaviorDescription",
      label: "Opis povahy",
    },
  ];

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };
  constructor() {
    super();
    const user = authService.getCurrentUser();
    //if (user && user.isAdmin) this.columns.push(this.deleteColumn);
    this.columns.push(this.deleteColumn);
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies[0]}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
