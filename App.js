// import React, { Component } from 'react';
// import {
//   Switch,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import Collapsible from 'react-native-collapsible';
// import Accordion from 'react-native-collapsible/Accordion';



// const CONTENT = [
//   {
//     title: 'NASI KUCING',
//     content: 'Jajanan tradisional yang merakyat ini memang nggak tampil semewah gudeg dari Yogyakarta atau timlo khas Solo. Namun, nasi kucing menawarkan sensasi makan memuaskan dengan harga yang sangat terjangkau.',
//   },
//   {
//     title: 'BAKSO',
//     content: 'Bakso atau baso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia. Bakso umumnya dibuat dari campuran daging sapi giling dan tepung tapioka, akan tetapi ada juga bakso yang terbuat dari daging ayam, ikan, atau udang bahkan daging kerbau',
//   },
//   {
//     title: 'MIE AYAM',
//     content: 'Mi ayam atau bakmi ayam adalah masakan Indonesia yang terbuat dari mi kuning direbus mendidih kemudian ditaburi saus kecap khusus beserta daging ayam dan sayuran',
//   },
//   {
//     title: 'SATE PADANG',
//     content: 'Sate Padang adalah sebutan untuk tiga jenis varian sate di Sumatra Barat, yaitu Sate Padang, Sate Padang Panjang dan Sate Pariaman. Sate Padang memakai bahan daging sapi, lidah, atau jerohan (jantung, usus, dan tetelan) dengan bumbu kuah kacang kental (mirip bubur) ditambah cabai yang banyak sehingga rasanya pedas',
//   },
//   {
//     title: 'KETOPRAK',
//     content: 'Ketoprak (bahasa Jawa: kethoprak) adalah sejenis seni pentas drama tradisional yang diyakini berasal dari Surakarta dan berkembang pesat di Yogyakarta, oleh karena itu kesenian ini sering disebut sebagai Ketoprak Mataram. ... Biasanya diambil dari cerita legenda atau sejarah Jawa, meski juga ada cerita fiksi.',
//   },
// ];


// export default class App extends Component {
//   state = {
//     activeSections: [],
//     collapsed: true,
//     multipleSelect: false,
//   };

//   toggleExpanded = () => {
//     this.setState({ collapsed: !this.state.collapsed });
//   };

//   setSections = sections => {
//     this.setState({
//       activeSections: sections.includes(undefined) ? [] : sections,
//     });
//   };

//   renderHeader = (section, _, isActive) => {
//     return (
//       <Animatable.View
//         duration={400}
//         style={[styles.header, isActive ? styles.active : styles.inactive]}
//         transition="backgroundColor"
//       >
//         <Text style={styles.headerText}>{section.title}</Text>
//       </Animatable.View>
//     );
//   };

//   renderContent(section, _, isActive) {
//     return (
//       <Animatable.View
//         duration={400}
//         style={[styles.content, isActive ? styles.active : styles.inactive]}
//         transition="backgroundColor"
//       >
//         <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
//           {section.content}
//         </Animatable.Text>
//       </Animatable.View>
//     );
//   }

//   render() {
//     const { multipleSelect, activeSections } = this.state;

//     return (
  
//       <View style={styles.container}>
//         <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
//           <Text style={styles.title}>Menu Makanan</Text>

//           <TouchableOpacity onPress={this.toggleExpanded}>
//             <View style={styles.header}>
//               <Text style={styles.headerText}>NASI GORENG</Text>
//             </View>
//           </TouchableOpacity>
//           <Collapsible collapsed={this.state.collapsed} align="center">
//             <View style={styles.content}>
            
//               <Text>
//               Nasi goreng adalah sebuah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah kecap manis, bawang merah, bawang putih, asam jawa, lada dan bumbu-bumbu lainnya, seperti telur, ayam, dan kerupuk. ... Nasi goreng juga dikenal sebagai masakan nasional Indonesia.
//               </Text>
       
//             </View>
//           </Collapsible>
//           <Accordion
//             activeSections={activeSections}
//             sections={CONTENT}
//             touchableComponent={TouchableOpacity}
//             expandMultiple={multipleSelect}
//             renderHeader={this.renderHeader}
//             renderContent={this.renderContent}
//             duration={400}
//             onChange={this.setSections}
//           />
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'skyblue',
//     paddingTop: 55,
//   },
//   title: {
//     flex:1,
//     height: 50,
//     backgroundColor: 'lightgreen',
//     borderBottomLeftRadius: 40,
//     borderTopRightRadius: 40,
//     textAlign: 'center',
//     marginHorizontal: 40,
//     fontSize: 22,
//     paddingTop: 10,
//     fontWeight: '300',
//     marginBottom: 30,
//   },
//   header: {
//     backgroundColor: '#baecf7',
//     padding: 10,
//   },
//   headerText: {
//     textAlign: 'center',
//     fontSize: 16,
//     backgroundColor: 'salmon',
//     borderTopLeftRadius: 25,
//     borderBottomRightRadius: 25,
//     fontWeight: '500',
//   },
//   content: {
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   active: {
//     backgroundColor: 'rgba(255,255,255,1)',
//   },
//   inactive: {
//     backgroundColor: '#baecf7',
//   },
// });
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri: '' + this.state.resourcePath.data,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.resourcePath.uri }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.resourcePath.uri}
          </Text>

          <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>       
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }
});