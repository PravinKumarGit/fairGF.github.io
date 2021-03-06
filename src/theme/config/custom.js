import defaultTheme from "./default";
import VARIABLES from "../global/variables";

export default {
  ...defaultTheme,
  palette: {
    primary: [
      VARIABLES.COLORS.defaultBlue, // 0: Default blue
      VARIABLES.COLORS.darkBlueFour, // 1: Darken 4%
      VARIABLES.COLORS.darBluekFive, // 2: Darken 5%
      VARIABLES.COLORS.fadeBlueTwenty, // 3: Fade 20%
      VARIABLES.COLORS.lightBlueThree, // 4: Lighten 3%
      VARIABLES.COLORS.fadeBlueSeventyFive, // 5: Fade 75%
      VARIABLES.COLORS.fadeBlueFifteen, // 6: Lighten 15%
      VARIABLES.COLORS.lightBlueTwelve, // 7: Lighten 12%
      VARIABLES.COLORS.darkBlueTwo, // 8: Darken 2%
      VARIABLES.COLORS.algoliaBlue, // 9: Algolia color
      VARIABLES.COLORS.lightBlueEight, // 10: Lighten 8%
      VARIABLES.COLORS.lightBlueNine, // 11:
      VARIABLES.COLORS.darkBlueTen, // 12: darken 10%
      VARIABLES.COLORS.lightBlueFive // 13: Lighten 5%
    ],
    secondary: [
      VARIABLES.COLORS.darkBlue, // 0: DarkBlue
      VARIABLES.COLORS.lightBlueTwo, // 1: LightBluish
      VARIABLES.COLORS.lightBlue, // 2: LightBlue
      VARIABLES.COLORS.darkBlueSix, // 3: LightBluish Darken 5%
      VARIABLES.COLORS.darkBlueSeven, // 4:
      VARIABLES.COLORS.darkBlueFifteen, // 5: DarkBlue Darken 5%
      VARIABLES.COLORS.lightBlueFour, // 6: LighterBluish
      VARIABLES.COLORS.darkBlueSixteen, // 7: DarkBluish
      VARIABLES.COLORS.lightBlueSix, // 8: LighterBluish Lighten 2%
      VARIABLES.COLORS.lightBlueSeven, // 9: LighterBluish Darken 3%
      VARIABLES.COLORS.lightBlack // 10: Sidebar submenu select
    ],
    color: [
      VARIABLES.COLORS.orange, // 0: Orange
      VARIABLES.COLORS.purple, // 1: Purple
      VARIABLES.COLORS.pink, // 2: Pink
      VARIABLES.COLORS.limeGreen, // 3: LimeGreen
      VARIABLES.COLORS.blueShade, // 4: BlueShade
      VARIABLES.COLORS.yellow, // 5: Yellow
      VARIABLES.COLORS.darkYellowFive, // 6: Yellow Darken 5%
      VARIABLES.COLORS.facebook, // 7: Facebook
      VARIABLES.COLORS.darkFacebookFive, // 8: Facebook Darken 5%
      VARIABLES.COLORS.googlePlus, // 9: Google Plus
      VARIABLES.COLORS.darkGooglePlusFive, // 10: Google Plus Darken 5%
      VARIABLES.COLORS.lightOrangeOne, // 11: Auth0
      VARIABLES.COLORS.lightOrangeTwo, // 12: Auth0
      VARIABLES.COLORS.lightRedOne, // 13: themeColor--AlizarinCrimson
      VARIABLES.COLORS.lightNavyBlueOne, // 14: light green
      VARIABLES.COLORS.lightNavyBlueOne, // 15: themeColor--- Dark green
      VARIABLES.COLORS.white, // 16: white,
      VARIABLES.COLORS.lightGrayOne, // 17: light gray,
      VARIABLES.COLORS.lightRedTwo, // 18: light red,
      VARIABLES.COLORS.lightGreenTwo, // 19: themeColor-- extra light green,
      VARIABLES.COLORS.lightGreenThree, // 20: extra light green,
      VARIABLES.COLORS.black, // 21: black,
      VARIABLES.COLORS.lightYellowOne, // 22: yellow,
      VARIABLES.COLORS.lightYellowTwo, // 23: light yellow
      VARIABLES.COLORS.lightGreenSeven, // 24 green upload button
      VARIABLES.COLORS.lightGreenEight // 25 extra light screen
    ],
    warning: [
      VARIABLES.COLORS.lightRedThree // 0: Warning
    ],
    success: [
      VARIABLES.COLORS.lightGreenFour // 0: Success
    ],
    error: [
      VARIABLES.COLORS.lightRedFour, // 0: Error
      VARIABLES.COLORS.darkRedOne, // 1: Darken 4%
      VARIABLES.COLORS.lightRedFive, // 2: Lighten 8%
      VARIABLES.COLORS.red // 3: Red
    ],
    grayscale: [
      VARIABLES.COLORS.lightGrayTwenty, // 0: GreyShade
      VARIABLES.COLORS.lightGrayTwo, // 1: GreyDark
      VARIABLES.COLORS.lightGrayFour, // 2: Grey
      VARIABLES.COLORS.lightGrayFive, // 3: GreyAlt
      VARIABLES.COLORS.lightGraySix, // 4: GreyLight
      VARIABLES.COLORS.lightGraySeven, // 5: DarkWhite
      VARIABLES.COLORS.lightGrayEight, // 6: DarkerWhite
      VARIABLES.COLORS.lightGrayNine, // 7: #fff Darken 1%
      VARIABLES.COLORS.lightGrayTen, // 8:
      VARIABLES.COLORS.lightGrayEleven, // 9:
      VARIABLES.COLORS.lightGrayTwelve, // 10:
      VARIABLES.COLORS.lightGrayTherteen, // 11: today-highlight-bg
      VARIABLES.COLORS.lightFourteenGray, // 12: light gray with less opacity
      VARIABLES.COLORS.lightGrayFifteen, // 13: extra light gray with green
      VARIABLES.COLORS.lightGraySixteen, // 14: extra light gray with green
      VARIABLES.COLORS.lightGraySeventeen, // 15: gray with red
      VARIABLES.COLORS.lightGrayEighteen, // 16: extra light gray with green
      VARIABLES.COLORS.gray, // 17: GreyDarker
      VARIABLES.COLORS.darkGrayOne, // 18: Grey
      VARIABLES.COLORS.darkGrayTwo // 19: Grey sade
    ],
    text: [
      VARIABLES.COLORS.darkGrayThree, // 0: Heading
      VARIABLES.COLORS.darkGrayFour, // 1: HeadingLight
      VARIABLES.COLORS.darkGrayFive, // 2: Text
      VARIABLES.COLORS.darkGraySix, // 3: TextDark
      VARIABLES.COLORS.darkGraySeven // 4: Heading Lighten 22%
    ],
    border: [
      VARIABLES.COLORS.darkGrayEight, // 0: Border
      VARIABLES.COLORS.darkGrayNine, // 1: BorderDark
      VARIABLES.COLORS.darkGrayTen, // 2: BorderLight
      VARIABLES.COLORS.darkGrayEleven, // 3: orderExtraLight
      VARIABLES.COLORS.darkGrayTwelve, // 4:
      VARIABLES.COLORS.darkGrayTharteen, // 5: extra light green
      VARIABLES.COLORS.lightGreenFive, // 6: light green
      VARIABLES.COLORS.lightGrayNinteen // 7: light gray
    ],

    calendar: [
      VARIABLES.COLORS.lightBrownOne, // 0:
      VARIABLES.COLORS.lightVioletOne, // 1:
      VARIABLES.COLORS.lightBrownTwo, // 2:
      VARIABLES.COLORS.lightGreenSix, // 3:
      VARIABLES.COLORS.lightRedsix, // 4:
      VARIABLES.COLORS.lightPinkOne // 5:
    ],
    header: [
      VARIABLES.COLORS.white, // 0: white
      VARIABLES.COLORS.white, // 1: white
      VARIABLES.COLORS.black // 2: black
    ],
    breadCrumHeader: [
      VARIABLES.COLORS.lightOrangeThree, // 0: active text color
      VARIABLES.COLORS.darkGrayFourteen, // 1: inactive text color
      VARIABLES.COLORS.white, // 2: background color
      VARIABLES.COLORS.lightOrangeThree, // 3: dot-line color
      VARIABLES.COLORS.darkGrayFifteen // 4: inactive text color
    ],
    accordian: [
      VARIABLES.COLORS.lightNavyBlueOne, // 0: Head bar background one
      VARIABLES.COLORS.white, // 1: Head bar text Color
      VARIABLES.COLORS.lightNavyBlueOne, // 2: panel background
      VARIABLES.COLORS.white, // 3: panel text color
      VARIABLES.COLORS.lightNavyBlueOne, // 4: Head bar background two
      VARIABLES.COLORS.darkGrayFourteen // 5: List item disc icon
    ],
    formInputElement: [
      VARIABLES.COLORS.black, // 0: Label
      VARIABLES.COLORS.lightNavyBlueOne, // 1: border
      VARIABLES.COLORS.lightNavyBlueOne, // 2: place holder
      VARIABLES.COLORS.white, // 3: tooltip
      VARIABLES.COLORS.lightNavyBlueOne, // 4: optional label
      VARIABLES.COLORS.white // 5: input background
    ],
    footer: [
      VARIABLES.COLORS.white, // 0: border top
      VARIABLES.COLORS.white, // 0: BackGround
      VARIABLES.COLORS.black, // 1: Text
    ]
  }
};
