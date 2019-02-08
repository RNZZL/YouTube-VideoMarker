let orangeProgressBar = `
	<div class="ytp-play-progress ytp-swatch-background-color orangeProgress"></div>
`,
inputText = `
	<div class="DIV_1 buttonUpper">
		<div id="button-upper-overlay" class="meme-overlay"></div>
		<div class="DIV_2">
			<input name="hashcutTopMemeInput" type="text" class="INPUT_3 input-upper" />
		</div>
	</div>
`,
inputTextBelow = `
	<div class="DIV_1 buttonLower">
		<div id="button-lower-overlay" class="meme-overlay"></div>
		<div class="DIV_2">
			<input name="hashcutLowMemeInput" type="text" class="INPUT_3 input-lower" />
		</div>
	</div>
`,
Button = `
	<div class="hashCutController style-scope ytd-watch" id="info">
		<a href="#" title="Add an additional clip to your HashCut" id="A_1" value="addRecording">Add to Recording</a>
		<a href="#" class="createButton continue state-start" data-toggle="tooltip" data-placement="top" title="Set the start point for this clip">
							1. Start Recording
		</a>
		<span class="tooltiptext">Video Is Non-Embeddable</span>
		<a href="#" class="preview-current-clip" title="Preview current clip" value="preview">Preview</a>
		<a href="#" class="preview-current-clip text" title="Add/Remove meme text" value="addText">Add Text</a>
		<a href="#" class="preview-current-clip clip-sticker" title="Add/Remove Sticker" value="addSticker">Add Sticker</a>
		<a href="#" class="preview-current-clip clip-delete" title="Delete HashCut" value="deleteHashcut">Delete</a>
	</div>
`,
LoginHTML = `
	<div id="loginModal" class="loginModal">
		<div class="modal-content" >
			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>Login</h2>
			</div>
			<div class="modal-body">
				<div class="login-page">
				<h1 class="isa_success">Success: Logged In</h1>
				<p class="wrongCredentials">Incorrect email or password</p>
					<div class="form">

						<form class="login-form">
							<input type="text" placeholder="username" id="username"/ >
							<input type="password" placeholder="password" id="password"/ >
							<button id="loginButton">login</button>
							<p class="message">Not registered? <a href="https://www.hashcut.com/sign-up" target="_blank">Create an account</a></p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
`,
emailHTML = `
	<div id="emailModal" class="shareModal">
		<div class="modal-content" >
			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>Share via email</h2>
			</div>
			<div class="modal-body">
				<div class="login-page">

					<div class="form">
					<h1 class="isa_success">Email Has Been Successfully Sent </h1>
					<p class="wrongCredentials"> Incorrect Email</p>
						<form class="login-form">
							<input type="email" placeholder="Email address to send link to" id="emailaddress" />
							<textarea rows="4" cols="40" placeholder="Enter any additional comments here." id="emailContent"></textarea>
							<button id="sendEmailButton">Send Email</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
`,
iframe = `
	<div id="iframeModal" class="iframeModal">
		<div class="modal-content" >
			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>HashCut Preview</h2>
			</div>
			<div class="modal-body">
			</div>
		</div>
	</div>
`,
CatHTML = `
	<div class="stickers style-scope ytd-watch" id="info">
		<select id="soflow">
		</select>
		<div id="stickersDisplay">
			<div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
			<div id="stickers-DIV_2">
			</div>
			<div id="owl-controls">
				<div id="owl-nav">
					<div id="owl-prev" value="prev">
						prev
					</div>
					<div id="owl-next" value='next'>
						next
					</div>
				</div>
			</div>
		</div>
	</div>
`,
shareHTML = `
    <div id="shareModal" class="shareModal">
		<div class="modal-content" >
			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>HashCut Clip Share</h2>
			</div>
			<div class="modal-body">
				<div id="shareDiv">
					<h2 class="ShareCongrats">
						Congrats! You just created a HashCut
					</h2>
					<p class="shareMessage">
						Share my HashCut now:
					</p>
					<div class="shareDivIcons">
						<div class="facebookShare">
							<a href="#" class="shareTag" value="facebook"> <span class="shareSpan"><img src="https://d1vdrxaw6iclcl.cloudfront.net/images/icons/facebook.svg" class="share-Icon" title='Share on Facebook' /></span></a>
						</div>
						<div class="discordShare">
							<a href="#" class="shareTag" value="discord"> <span class="shareSpan"><img src="https://d1vdrxaw6iclcl.cloudfront.net/images/icons/discord.svg" class="share-Icon" title='Share on Discord' /></span></a>
						</div>
						<div class="twitterShare">
							<a href="#" class="shareTag" value="twitter"> <span class="shareSpan"><img src="https://d1vdrxaw6iclcl.cloudfront.net/images/icons/twitter_07.svg" class="share-Icon" title='Share on twitter' /></span> </a>
						</div>
						<div class="emailSHare">
							<a href="#" class="shareTag" value="email"> <span class="shareSpan"><img src="https://d1vdrxaw6iclcl.cloudfront.net/images/icons/closed_envelope.svg" class="share-Icon" title='Share Via Email' /></span></a>
						</div>
						<div class="permalinkShare">
							<a href="#" class="shareTag" value="link"> <span class="shareSpan"><img src="https://d1vdrxaw6iclcl.cloudfront.net/images/icons/link.svg" class="share-Icon" title = 'Get Hashcut URL' /></span></a>
						</div>
						<div class="embedCodeShare">
							<a href="#" class="shareTag" value="code"> <span class="shareSpan"><img src="https://d1vdrxaw6iclcl.cloudfront.net/images/icons/embed.svg" class="share-Icon" title='Get Embeded Code' /></span> </a>
						</div>
					</div>
				</div>
				<TEXTAREA name="thetext" rows="20" cols="80" id="linkTextArea">Notes.</TEXTAREA>
				<p class="status-el"></p>
			</div>
		</div>
	</div>
`,
twitterModal = `
	<div id="twitterModal">
		<div class="modal-content" >
			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>Send Tweet</h2>
			</div>
			<div class="modal-body">
				<label for="tweetComment">Enter your tweet below: </label>
				<textarea id="tweetComment" rows="3" maxlength="142"></textarea>
				<p class="tweetCharLimit">
					Remaining Characters:
					<span class="limitNumber"></span>
				</p>
				<p class="status-el"></p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" id="submit-tweet">Send</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
`,
discordModal = `
	<div id="DiscordModal">
		<div class="modal-content" >
			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>Share on Discord</h2>
			</div>
			<div class="modal-body">
				<div class="guildDropdown dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="guildDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span id="discord-select-guild-text">Select Server:</span>
					</button>
					<div class="guild-menu dropdown-menu" aria-labelledby="guildDropdownMenuButton"></div>
				</div>
				<br />
				<label for="discord-comment">Additional message to post: </label>
				<textarea id="discord-comment" rows="3"></textarea>
				<p class="status-el"></p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" id="submit-discord">Send</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			</div>
		</div>
	</div>
`,
CodeModal = `
    <div id="codeModal" class="linkModal">
		<div class="modal-content" >
			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>Embed Code</h2>
			</div>
			<div class="modal-body">
				<p> Copy-n-paste the following link to embed this HashCut: </p>
				<div id="embedCode"><p></p></div>
				<hr>
				<button id="copyToClipBoardCode" value="copy">Copy</button>
        	</div>
		</div>
	</div>
`,
linkModal = `
    <div id="LinkModal" class="linkModal">
		<div class="modal-content" >
			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>Permanent Link</h2>
			</div>
			<div class="modal-body">
				<p> Copy-n-paste the following link to share this HashCut: </p>
				<h1></h1>
				<hr>
				<button id="copyToClipBoard" value="copy">Copy</button>
			</div>
		</div>
	</div>
`,
categoryLoader = `
    <div id="loading-bar-spinner" class="spinner">
    	<div class="spinner-icon"></div>
    </div>
`,
startMarker = `
    <div class="startMarker">
    	<span class="markerSpan"><p>1:12</p></span>
    </div>
`,
endMarker = `
    <div class="endMarker">
    	<span class="markerSpan"><p>1:12</p></span>
    </div>
`,
welcomeModal = `
	<div id="welcomeModal" class="welcomeModal">
		<div class="modal-content" >
			<div class="modal-header">
				<span class="close">&times;</span>
				<h2>Welcome to the HashCut Chrome Extension</h2>
			</div>
			<div class="modal-body">
				<div id="logo"></div>
				<div class="welcome-message">
					<p>
						Thank you for installing the HashCut Chrome Extension.  You can now clip and share YouTube
						videos while you’re watching them -- directly from YouTube!
					</p>
					<p>
						Creating a clip is as easy as 1-2-3. Look for the ‘Start Recording’ button, and click on it
						when you’d like to begin your clip. Note that you may have to scroll a bit below your video to
						see the button. Then, simply hit ‘End Recording’ where you’d like to end, and ‘Save Clip’ to
						save and share it.
					</p>
					<div id="steps">
						<button class="steps-button">1. Start Recording</button>
						&nbsp;
						<span class="glyphicon glyphicon-arrow-right"></span>
						&nbsp;
						<button class="steps-button">2. End Recording</button>
						&nbsp;
						<span class="glyphicon glyphicon-arrow-right"></span>
						&nbsp;
						<button class="steps-button">3. Save Clip</button>
					</div>
					<p>
						In order to get 1-click sharing accounts to Discord, Twitter, Facebook, and more, you’ll have to
						 add those to your account.  Either sign in to your existing HashCut account now, or create a
						 new account:
					</p>
					<div id="user-buttons">
						<div class="signIn btn-group">
						  <button type="button" id="signIn" class="btn btn-default">
							Sign-in
						  </button>
						</div>
						&nbsp;
						<p>OR</p>
						&nbsp;
						<a href="https://www.hashcut.com/sign-up" target="_blank" id="createAccount">Create Account</a>
					</div>
					<p>
						Once you’re signed in, you should see the HashCut icon in full color at the top right of your
						Chrome browser, on the URL bar:
					</p>
					<div id="colored-logo"></div>
					<p>Now you should be all set. Happy hashcutting!</p>
				</div>
            </div>
    	</div>
    </div>
`;
