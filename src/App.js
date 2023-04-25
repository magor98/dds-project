import React from 'react';

class App extends React.Component {
  state = {
    person: {
      fullName: 'Quavo HUNCHO',
      bio: 'Quavious Keyate Marshall, dit Quavo, est un rappeur et chanteur américain né le 2 avril 1991 à Athens, au USA. Il est lun des trois membres du groupe de rap Migos fondé en 2009.', 
      imgSrc: 'https://www.highsnobiety.com/static-assets/thumbor/JP16BZCMJuRoTafcSIUNIzs4h-0=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2018/03/29134547/quavo-facts-you-didnt-know-01.jpg',
      profession: 'Trap Music Rapper ',
    },
    shows: false,
    mountedAt: new Date(),
  };

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, mountedAt } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? 'Sortir' : 'Regardez le Profil de la star'}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>montage du dernier composant {Math.floor((new Date() - mountedAt) / 1000)} seconds Plutot.</p>
      </div>
    );
  }
}

export default App;
