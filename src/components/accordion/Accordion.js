import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';
import { Text } from '../text/Text';
import Icon from 'react-native-vector-icons/Entypo'



const Accordion = ({ title, addBtn, children }) => {
    const [open, setOpen] = useState(false);
    const [bodySectionHeight, setBodySectionHeight] = useState(0);
    const animatedController = useRef(new Animated.Value(0)).current;

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight],
    });

    const arrowAngle = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', `90deg`],
    });

    const toggleListItem = () => {
        if (open) {
            Animated.timing(animatedController, {
                duration: 500,
                toValue: 0,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(animatedController, {
                duration: 500,
                toValue: 1,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start();
        }
        setOpen(!open);
    };

    // useEffect(() => {
    //     Animated.timing(animatedController, {
    //         duration: 300,
    //         toValue: 1,
    //         easing: Easing.bezier(0.4, 0.0, 0.2, 1),
    //         useNativeDriver: false,
    //     }).start();
    // }, [])

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => toggleListItem()} >
                <View style={styles.titleContainer}>
                    <Text weight={'medium'} size={15} color={'black'}>{title}</Text>
                    <View style={styles.rightHeader}>
                        <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
                            <Icon name="chevron-right" size={20} color={'#184163'} />
                        </Animated.View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
                <View
                    style={styles.bodyContainer}
                    onLayout={event =>
                        setBodySectionHeight(event.nativeEvent.layout.height)
                    }>
                    {children}
                </View>
            </Animated.View >
        </View >
    );
};
export default Accordion;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        zIndex: 1,
    },
    bodyBackground: {
        overflow: 'hidden',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginTop: 10,
        zIndex: 1,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingHorizontal: 10
    },
    plusIcon: {
        marginRight: 6,
    },
    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bodyContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});
