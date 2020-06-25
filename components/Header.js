import { Menu } from 'grommet';
import Logo from '../media/animalCrossingShareLogo.png'

export default function Header() {
	return (
    	<div className="header">
			<img className="header__logo" src={Logo}></img>
		  	<div className="header__menu">
			    <Menu
        			label='Menu'
        			items={[
            			{ label: 'Dashboard' },
            			{ label: 'View Post' },
            			{ label: 'Activity Feed' },
            			{ label: 'Favorites' },
            			{ label: 'Account Settings' },
            			{ label: 'Languages' },
            			{ label: 'Add work' },
            			{ label: 'Logout' },
        			]}
        		/>
		  	</div>
    		<style jsx>{`
    			.header {
					display: flex;
				}
				.header__logo {
					padding: 25px;
					max-width: 8%;
					min-width: 8%;
					height: auto;
					flex: 1;
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}
    			.header__menu {
					flex: 1;
  					display: flex;
  					justify-content: flex-end;
					align-items: center;
				}
      			main {
        			padding: 5rem 0;
        			flex: 1;
        			display: flex;
        			flex-direction: column;
        			justify-content: center;
      			}
      			code {
        			background: #fafafa;
        			border-radius: 5px;
        			padding: 0.75rem;
        			font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
      			}
  			`}</style>
  		</div>
  	)
}
