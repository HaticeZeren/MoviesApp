import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Container, Visibility, Menu, Image } from 'semantic-ui-react';


const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  }
  
  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }

  
 export class Header extends Component {
	state = {
		menuFixed: null,
		overlayFixed: false,
	};
 	stickTopMenu = () => this.setState({ menuFixed: true });
	unStickTopMenu = () => this.setState({ menuFixed: null });
 	render() {
		const { menuFixed } = this.state;
 		return (
			<div>
				<Visibility
					onBottomPassed={this.stickTopMenu}
					onBottomVisible={this.unStickTopMenu}
					once={false}
				>
					<Menu
						borderless
						fixed={menuFixed && 'top'}
						style={menuFixed ? fixedMenuStyle : menuStyle}
					>
						<Container text>
							<Menu.Item>
								<Image size='mini' src='https://react.semantic-ui.com/logo.png' />
							</Menu.Item>
							<Menu.Item header>Movieapp</Menu.Item>
							<Menu.Item as={Link} to="/movies">
								Movies
							</Menu.Item>
							<Menu.Item as='a'>Add New</Menu.Item>
						</Container>
					</Menu>
				</Visibility>
			</div>
		);
	}
}
 export default Header;