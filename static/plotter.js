"use strict";

const e = React.createElement;

class ModelForm extends React.Component {
  constructor(props) {
    super(props);
    const N = 5;
    var flags = new Array(N);
    var showflags = new Array(N);
    var checkhistory = new Array(N);

    for (var i = 0; i < flags.length; i++) {
      flags[i] = false;
      showflags[i] = false;
      checkhistory[i] = false;
    }
    var intents = [[], [0, 1]];
    this.state = {
      flags: flags,
      intents: intents,
      checkhistory: checkhistory,
      showflags: showflags,
    };

    this.handleSubmitOne = this.handleSubmitOne.bind(this);
  }

  handleSubmitOne(event) {
    let flag = false;
    for (var i = 0; i < this.state.flags.length; i++) {
      if (this.state.flags[i] == true) {
        this.state.showflags = this.state.flags.slice();
        this.setState({ state: this.state });
        flag = true;
      }
    }
    if (flag == false && this.state.checkhistory[0]) {
      console.log(this.state.checkhistory[0]);
      window.location.href = "/data/Potato/ChipsColor/0+";
    }
  }

  toggleChange(i) {
    if (this.state.checkhistory[i]) {
      this.state.checkhistory[i] = false;
      for (var i = 0; i < this.state.flags.length; i++) {
        this.state.flags[i] = false;
      }
      for (var k = 0; k < this.state.intents.length; k++) {
        for (var j = 0; j < this.state.intents[k].length; j++) {
          if (this.state.checkhistory[k]) {
            this.state.flags[this.state.intents[k][j]] = true;
          }
        }
      }
    } else {
      for (var j = 0; j < this.state.intents[i].length; j++) {
        this.state.flags[this.state.intents[i][j]] = true;
      }
      this.state.checkhistory[i] = true;
    }
    this.setState({ state: this.state });
  }

  render() {
    let val0;
    let val1;
    let val2;
    let val3;
    let val4;
    let listOfIntents = "/data/Potato/ChipsColor/";
    for (var i = 0; i < this.state.checkhistory.length; i++) {
      if (this.state.checkhistory[i] === true) {
        listOfIntents = listOfIntents + i + "+";
      }
    }
    console.log(listOfIntents);
    let valtot = (
      <div className="check-list2">
        <div className="hoarding">
          <h1>Intent</h1>
        </div>
        <div className="checks">
          <label className="check">
            <input
              type="checkbox"
              defaultChecked={this.state.checkhistory[0]}
              onChange={() => this.toggleChange(0)}
            />
            Effect of T on Chips color
          </label>
          <label className="check">
            <input
              type="checkbox"
              defaultChecked={this.state.checkhistory[1]}
              onChange={() => this.toggleChange(1)}
            />
            Change in Chips color at a particular T and RH
          </label>
        </div>
        <div className="check-button">
          <button type="submit" value="Submit" onClick={this.handleSubmitOne}>
            Done
          </button>
        </div>
      </div>
    );

    if (this.state.showflags[0]) {
      val0 = (
        <label>
          Temperature(<sup>o</sup>C):&nbsp;
          <input className="number-input" type="number" name="temp" />
        </label>
      );
    }

    if (this.state.showflags[1]) {
      val1 = (
        <label>
          Relative Humidity(%):&nbsp;
          <input className="number-input" type="number" name="rh" />
        </label>
      );
    }

    return (
      <div>
        <div class="graph-plot"></div>
        <div class="data-receiver">
          <div class="form" style={{ padding: "30px" }}>
            <label for="story" class="input-details-text">
              Enter n, m and <br />
              Adjacency List:
            </label>
            <br />
            <textarea
              id="story"
              name="story"
              rows="15"
              cols="20"
              placeholder="Please enter here.."
              onChange={() => this.toggleChangetext(0)}
            ></textarea>
            <button type="submit" form="form" value="Submit">
              Submit
            </button>
          </div>
        </div>
        <div class="footer"></div>
      </div>
    );
  }
}
const domContainer = document.querySelector("#plot-and-form");
ReactDOM.render(e(ModelForm), domContainer);

// class ModelForm extends React.Component {
//   constructor(props) {
//     super(props);
//     const N = 5;
//     var flags = new Array(N);
//     var showflags = new Array(N);
//     var checkhistory = new Array(N);

//     for (var i = 0; i < flags.length; i++) {
//       flags[i] = false;
//       showflags[i] = false;
//       checkhistory[i] = false;
//     }
//     var intents = [[], [0, 1]];
//     this.state = {
//       flags: flags,
//       intents: intents,
//       checkhistory: checkhistory,
//       showflags: showflags,
//     };

//     this.handleSubmitOne = this.handleSubmitOne.bind(this);
//   }

//   handleSubmitOne(event) {
//     let flag = false;
//     for (var i = 0; i < this.state.flags.length; i++) {
//       if (this.state.flags[i] == true) {
//         this.state.showflags = this.state.flags.slice();
//         this.setState({ state: this.state });
//         flag = true;
//       }
//     }
//     if (flag == false && this.state.checkhistory[0]) {
//       console.log(this.state.checkhistory[0]);
//       window.location.href = "/data/Potato/ChipsColor/0+";
//     }
//   }

//   toggleChange(i) {
//     if (this.state.checkhistory[i]) {
//       this.state.checkhistory[i] = false;
//       for (var i = 0; i < this.state.flags.length; i++) {
//         this.state.flags[i] = false;
//       }
//       for (var k = 0; k < this.state.intents.length; k++) {
//         for (var j = 0; j < this.state.intents[k].length; j++) {
//           if (this.state.checkhistory[k]) {
//             this.state.flags[this.state.intents[k][j]] = true;
//           }
//         }
//       }
//     } else {
//       for (var j = 0; j < this.state.intents[i].length; j++) {
//         this.state.flags[this.state.intents[i][j]] = true;
//       }
//       this.state.checkhistory[i] = true;
//     }
//     this.setState({ state: this.state });
//   }

//   render() {
//     let val0;
//     let val1;
//     let val2;
//     let val3;
//     let val4;
//     let listOfIntents = "/data/Potato/ChipsColor/";
//     for (var i = 0; i < this.state.checkhistory.length; i++) {
//       if (this.state.checkhistory[i] === true) {
//         listOfIntents = listOfIntents + i + "+";
//       }
//     }
//     console.log(listOfIntents);
//     let valtot = (
//       <div className="check-list2">
//         <div className="hoarding">
//           <h1>Intent</h1>
//         </div>
//         <div className="checks">
//           <label className="check">
//             <input
//               type="checkbox"
//               defaultChecked={this.state.checkhistory[0]}
//               onChange={() => this.toggleChange(0)}
//             />
//             Effect of T on Chips color
//           </label>
//           <label className="check">
//             <input
//               type="checkbox"
//               defaultChecked={this.state.checkhistory[1]}
//               onChange={() => this.toggleChange(1)}
//             />
//             Change in Chips color at a particular T and RH
//           </label>
//         </div>
//         <div className="check-button">
//           <button type="submit" value="Submit" onClick={this.handleSubmitOne}>
//             Done
//           </button>
//         </div>
//       </div>
//     );

//     if (this.state.showflags[0]) {
//       val0 = (
//         <label>
//           Temperature(<sup>o</sup>C):&nbsp;
//           <input className="number-input" type="number" name="temp" />
//         </label>
//       );
//     }

//     if (this.state.showflags[1]) {
//       val1 = (
//         <label>
//           Relative Humidity(%):&nbsp;
//           <input className="number-input" type="number" name="rh" />
//         </label>
//       );
//     }

//     if (
//       this.state.showflags[0] ||
//       this.state.showflags[1] ||
//       this.state.showflags[2] ||
//       this.state.showflags[3] ||
//       this.state.showflags[4]
//     ) {
//       return (
//         <div>
//           {valtot}
//           <article className="data-form">
//             <h3>Please fill the details!</h3>
//             <div className="model-form">
//               <form action={listOfIntents} method="POST">
//                 {val0}
//                 {val1}
//                 {val2}
//                 {val3}
//                 {val4}
//                 <button type="submit" value="Submit">
//                   Done
//                 </button>
//               </form>
//             </div>
//           </article>
//         </div>
//       );
//     } else {
//       return <div>{valtot}</div>;
//     }
//   }
// }
// const domContainer = document.querySelector("#model-selector");
// ReactDOM.render(e(ModelForm), domContainer);
