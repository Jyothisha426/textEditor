import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  MainContainer,
  LeftContainer,
  LeftHeading,
  LeftImage,
  RightContainer,
  ToolsUl,
  ToolsLi,
  Button,
  TextArea,
} from './styledComponent'

class Home extends Component {
  state = {isBold: false, isUnderline: false, isItalic: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <AppContainer>
        <MainContainer>
          <LeftContainer>
            <LeftHeading>Text Editor</LeftHeading>
            <LeftImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <ToolsUl>
              <ToolsLi>
                <Button
                  data-testid="bold"
                  colorText={boldLogo}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </ToolsLi>
              <ToolsLi>
                <Button
                  data-testid="italic"
                  colorText={italicLogo}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ToolsLi>
              <ToolsLi>
                <Button
                  data-testid="underline"
                  colorText={underlineLogo}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ToolsLi>
            </ToolsUl>
            <TextArea
              isBold={isBold}
              isUnderline={isUnderline}
              isItalic={isItalic}
            />
          </RightContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default Home
