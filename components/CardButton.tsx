import {Image, View, Text, TouchableOpacity} from 'react-native';
import  {images} from '@/constants'
// import React from 'react'

const CardButton = () => {
    const totalItems = 10;
    return (
        <TouchableOpacity className={'cart-btn'} onPress={() => {
        }}>
            <Image source={images.bag} className={"size-5"} resizeMode={"contain"} />
            {totalItems > 0 && (
                <View className={"cart-badge"}>
                    <Text className={"small-bold text-white"}>{totalItems} </Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default CardButton
