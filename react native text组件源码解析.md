# 源码位置：
https://github.com/facebook/react-native/blob/main/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/views/text/ReactTextView.java
# 大致方式：
首先看构造函数->initView()，用于初始化，recycleView()也会用到

首先有一个mReactBackgroundManager，这个东西初始化时自然没有，recycleView()会用到

初始化了所有的属性
```js
private void initView() {
if (mReactBackgroundManager != null) {
    // make sure old background manager doesn't have any references back to this View
    mReactBackgroundManager.cleanup();
}

mReactBackgroundManager = new ReactViewBackgroundManager(this);

mNumberOfLines = ViewDefaults.NUMBER_OF_LINES;
mAdjustsFontSizeToFit = false;
mLinkifyMaskType = 0;
mNotifyOnInlineViewLayout = false;
mTextIsSelectable = false;
mShouldAdjustSpannableFontSize = false;
mEllipsizeLocation = TextUtils.TruncateAt.END;
mFontSize = Float.NaN;
mMinimumFontSize = Float.NaN;
mLetterSpacing = 0.f;

mSpanned = null;
}
```
基本上望文生义，很简单

接下来是recycleView，不知道有什么用，感觉没有用

接下来是inlineViewJson，设置一个json，里面有visibility，top，left之类

接下来是onLayout，

使用TextView的过程中，有时候会需要将一串文本中的部分文字做特别的显示效果处理，比如加粗、改变颜色、加着重标识、超链接等等，我们可以通过多个TextView拼凑来实现，但如果需要特殊处理的内容在整个文本的中间，用多个TextView拼凑实在是太麻烦了，Android提供的SpannableString类能够很好地解决这个问题

太复杂了
