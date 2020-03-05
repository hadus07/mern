import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/DonutSmallRounded';

export function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
			<ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['home', 'about', 'email', 'drafts'].map((text, index) => (
            <Link to={`/${text}`}>
				<ListItem button key={text}>
					<ListItemIcon><MailIcon /></ListItemIcon>
					<ListItemText primary={text.toUpperCase()} />
				</ListItem>
			</Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
	  	style={{
		  display: 'flex',
		  flexDirection: 'column',
		  justifyContent: 'center',
		  alignItems: 'center',
		  height: '100vh',
		  width: '100vw'
		}}
	>
			<Switch>
				{['home', 'about', 'email'].map((text, index) => (
					<Route path={`/${text}`}>
						<Typography variant='h1'>{text.toUpperCase()}</Typography>
					</Route>
				))}
				<Route>
					<List>
						{['photos', 'gallery', 'album'].map(text => (
							<Link to={`/drafts/${text}`}>
								<ListItem>
									<ListItemAvatar>
										<Avatar><ImageIcon /></Avatar>
									</ListItemAvatar>
									<ListItemText primary={text} secondary="Jan 9, 2014" />
								</ListItem>
							</Link>
						))}
					</List>
					<Switch>
						{['photos', 'gallery', 'album'].map(text => (
							<Route path={`/drafts/${text}`}>
								<h1>{text}</h1>
							</Route>
						))}
					</Switch>
				</Route>
			</Switch>
      </main>
    </BrowserRouter>
  );
}
