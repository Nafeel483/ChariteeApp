import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import ProjectList from '../../../Components/ProjectList';
import Styles from './Styles';
import * as ProjectListData from './projectData';
import FilterWrapper from '../../../Components/FilterWrapper';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tabValue: 1,
      animatedData: false,
      openFilter: false,
      counter: 0,
    };
  }
  selectTabs = (value) => {
    this.setState({ tabValue: value });
  };
  getScrollData = () => {
    this.setState({ animatedData: !this.state.animatedData });
  };
  filterOpen = () => {
    this.setState({ openFilter: !this.state.openFilter });
  };
  selectCounter = (value) => {
    this.setState({ counter: value });
  };
  render() {
    const { search, tabValue, animatedData, openFilter } = this.state;
    const { counter } = this.state;
    return (
      <>
        <SafeAreaView style={Styles.mainConatiner1} />
        <SafeAreaView style={Styles.mainConatiner}>
          <View style={Styles.mainHeader}>
            <View style={Styles.headerContainer}>

              <>
                <Text style={Styles.titleText}>{'Projects'}</Text>
                <View style={Styles.emailWrapper}>
                  <Image
                    source={Images.Search}
                    style={Styles.inputImageLock}
                  />
                  <TextInput
                    style={Styles.emailInput}
                    value={search}
                    placeholder={'Enter the project name'}
                    placeholderTextColor={Colors.textInputColor}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                      this.setState({ search: value });
                    }}
                  />
                </View>
              </>
              <View style={Styles.mainWrapperButton}>
                {/* 1 */}
                <TouchableOpacity
                  style={[
                    Styles.buttonWrapper,
                    {
                      backgroundColor:
                        tabValue === 1 ? Colors.appHeaderColor : '#FFEAF0',
                    },
                  ]}
                  onPress={() => {
                    this.selectTabs(1);
                  }}>
                  <Text
                    style={[
                      Styles.buttonText,
                      {
                        color:
                          tabValue === 1 ? Colors.White : Colors.appHeaderColor,
                      },
                    ]}>
                    {'Activities'}
                  </Text>
                </TouchableOpacity>
                {/* 2 */}
                <TouchableOpacity
                  style={[
                    Styles.buttonWrapper,
                    {
                      backgroundColor:
                        tabValue === 2 ? Colors.appHeaderColor : '#FFEAF0',
                    },
                  ]}
                  onPress={() => {
                    this.selectTabs(2);
                  }}>
                  <Text
                    style={[
                      Styles.buttonText,
                      {
                        color:
                          tabValue === 2 ? Colors.White : Colors.appHeaderColor,
                      },
                    ]}>
                    {'Joint'}
                  </Text>
                </TouchableOpacity>
                {/* 3 */}
                <TouchableOpacity
                  style={[
                    Styles.buttonWrapper,
                    {
                      backgroundColor:
                        tabValue === 3 ? Colors.appHeaderColor : '#FFEAF0',
                    },
                  ]}
                  onPress={() => {
                    this.selectTabs(3);
                  }}>
                  <Text
                    style={[
                      Styles.buttonText,
                      {
                        color:
                          tabValue === 3 ? Colors.White : Colors.appHeaderColor,
                      },
                    ]}>
                    {'Friends'}
                  </Text>
                </TouchableOpacity>

                {/* 4 */}
                <TouchableOpacity
                  style={[
                    Styles.buttonWrapper,
                    {
                      backgroundColor:
                        tabValue === 4 ? Colors.appHeaderColor : '#FFEAF0',
                    },
                  ]}
                  onPress={() => {
                    this.selectTabs(4);
                  }}>
                  <Text
                    style={[
                      Styles.buttonText,
                      {
                        color:
                          tabValue === 4 ? Colors.White : Colors.appHeaderColor,
                      },
                    ]}>
                    {'Completed'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <ScrollView
           >
            <View style={Styles.mainScrollWrapper}>
              {ProjectListData?.listData.length > 0 &&
                ProjectListData.listData.map((data) => (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate(
                          'ProductDescriptionAbout',
                        );
                      }}>
                      <ProjectList
                        navigation={this.props.navigation}
                        projectData={data}
                      />
                    </TouchableOpacity>
                  </>
                ))}
            </View>
          </ScrollView>
          {counter !== 0 ? (
            <TouchableOpacity onPress={this.filterOpen}>
              <Image source={Images.FilterRed} style={Styles.filterStyle} />
              <View style={Styles.notifTag1}>
                <Text style={Styles.tagTextStyle}>{counter}</Text>
              </View>
            </TouchableOpacity>
          ) : (
              <TouchableOpacity onPress={this.filterOpen}>
                <Image source={Images.Filter} style={Styles.filterStyle} />
              </TouchableOpacity>
            )}
          {openFilter && (
            <FilterWrapper
              filterModel={openFilter}
              onclose={this.filterOpen}
              counter={counter}
              selectCounter={this.selectCounter}
            />
          )}
        </SafeAreaView>
      </>
    );
  }
}

export default Projects;
