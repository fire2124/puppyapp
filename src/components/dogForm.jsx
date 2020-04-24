import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class DogForm extends Form {
  state = {
    data: {
      Gender: "",
      Breed: "",
      Age: Number,
      Weight: Number,
      Height: Number,
      Vaccinated: Boolean,
      Castrated: Boolean,
      DateRescued: Date,
      PlaceRescued: "",
      RescueInfo: "",
      AppearanceDescription: "",
      BehaviorDescription: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    Id: Joi.string(),
    Gender: Joi.string().required().label("Gender"),
    Breed: Joi.string().required().label("Breed"),
    Age: Joi.number().integer().required().min(0).max(100).label("Age"),
    Weight: Joi.number().integer().required().min(0).max(100).label("Weight"),
    Height: Joi.number().integer().required().min(0).max(100).label("Height"),
    Vaccinated: Joi.boolean().required().label("Vaccinated"),
    Castrated: Joi.boolean().required().label("Castrated"),
    DateRescued: Joi.date().required().label("DateRescued"),
    PlaceRescued: Joi.string().required().label("PlaceRescued"),
    RescueInfo: Joi.string().required().label("RescueInfo"),
    AppearanceDescription: Joi.string()
      .required()
      .label("AppearanceDescription"),
    BehaviorDescription: Joi.string().required().label("BehaviorDescription"),
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      //const movieId = this.props.match.params.id;
      const movieId = this.props.location.pathname;

      if (movieId === "/dog") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(dogModel) {
    const dog = dogModel.dog;
    console.log(dog);

    return {
      Id: dog.Id,
      Gender: dog.Gender,
      Breed: dog.Breed,
      Age: dog.Age,
      Weight: dog.Weightinteger,
      Height: dog.Height,
      Vaccinated: dog.Vaccinated,
      Castrated: dog.Castrated,
      DateRescued: dog.DateRescued,
      PlaceRescued: dog.PlaceRescued,
      RescueInfo: dog.RescueInfo,
      AppearanceDescription: dog.AppearanceDescription,
      BehaviorDescription: dog.BehaviorDescription,
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);
    console.log(this.state.data);

    this.props.history.push("/add");
  };

  render() {
    return (
      <div>
        <h1>Profil psa</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Gender", "Pohlavie psa", "text")}
          {this.renderInput("Breed", "Plemeno", "text")}
          {this.renderInput("Age", "Vek", "number")}
          {this.renderInput("Weight", "Váha", "number")}
          {this.renderInput("Height", "Výška", "number")}
          {this.renderInput("Vaccinated", "Zaočkovaný", "boolean")}
          {this.renderInput("Castrated", "Kastrovaný", "boolean")}
          {this.renderInput("DateRescued", "Dátum nájdenia", "text")}
          {this.renderInput("PlaceRescued", "Miesto nájdenia", "text")}
          {this.renderInput("RescueInfo", "RescueInfo", "text")}
          {this.renderInput(
            "AppearanceDescription",
            "Základný opis výzoru / Farba srsti",
            "text"
          )}
          {this.renderInput("BehaviorDescription", "Opis povahy", "text")}

          {this.renderButton("Uložiť")}
        </form>
      </div>
    );
  }
}

export default DogForm;
