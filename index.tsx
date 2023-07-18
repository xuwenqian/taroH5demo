import {View, Text, Button,RootPortal, StickyHeader, StickySection, CheckboxGroup, Checkbox, Label,  } from '@tarojs/components'
import Taro, {useLoad,usePullDownRefresh} from '@tarojs/taro'
import './index.scss'
import React, {useState} from "react";

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  // 下拉刷新时的回调。
  usePullDownRefresh(() =>{
    console.log("usePullDownRefresh")
  })
  const startPullDownRefresh = ()=>{
    console.log("startPullDownRefresh")
    Taro.startPullDownRefresh()
  }
  const  stopPullDownRefresh = () =>{
    console.log("stopPullDownRefresh")
    Taro.stopPullDownRefresh()
  }

  return (
    <View className='index'>
      <View onClick={startPullDownRefresh} className='tip'>
        <Text>开始下拉刷新</Text>
      </View>
      <View onClick={stopPullDownRefresh} className='tip'>
        <Text>暂停下拉刷新</Text>
      </View>
      <View className='tip'>
        <Text>Tab Bar 暂时不可用，请点击button进行跳转</Text>
      </View>
      <Button className={'buttonStyle'} onClick={() => {
        Taro.navigateTo({
          url: 'pages/component/index/index'
        })
      }}>组件示例</Button>

      <Button className={'buttonStyle'} onClick={() => {
        Taro.navigateTo({
          url: 'pages/api/index/index'
        })
      }}>Api示例</Button>

    </View>
  )
}
