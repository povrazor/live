import {h, Component}					from 'preact/preact';
import UIIcon							from 'ui/icon/icon';
import UIImage							from 'ui/image/image';
import UIButton							from 'ui/button/button';

export default class ViewMain extends Component {
	constructor( props ) {
		super(props);

		this.state = {
			'obs': null,
			'twitch': null,
			'youtube': null,
			'mixer': null,
			'smashcast': null,
		};
	}

	render( props, state ) {
		const OBSStatus = state.obs ? <UIIcon class="on" src="checkmark" /> : <UIIcon class="off" src="cross" />;
		const TwitchStatus = state.twitch ? <UIIcon class="on" src="checkmark" /> : <UIIcon class="off" src="cross" />;
		const YouTubeStatus = state.youtube ? <UIIcon class="on" src="checkmark" /> : <UIIcon class="off" src="cross" />;
		const MixerStatus = state.mixer ? <UIIcon class="on" src="checkmark" /> : <UIIcon class="off" src="cross" />;
		const SmashCastStatus = state.smashcast ? <UIIcon class="on" src="checkmark" /> : <UIIcon class="off" src="cross" />;

		return (
			<div id="main">
				<div class="info">
					<div><span>OBS:</span>{OBSStatus}</div>
					<div><span><UIIcon src="twitch" /> TWITCH:</span>{TwitchStatus}</div>
					<div><span><UIIcon src="youtube" /> YOUTUBE:</span>{YouTubeStatus}</div>
					<div><span>MIXER:</span>{MixerStatus}</div>
					<div><span>SMASHCAST:</span>{SmashCastStatus}</div>
				</div>
				<div class="body">
					<div class="label">Title:</div>
					<div id="title" class="full">
						<input type="text" /><UIButton>SET</UIButton>
					</div>
					<div class="label">Game:</div>
					<div id="game" class="full">
						<input type="text" /><UIButton>SET</UIButton>
					</div>
				</div>
			</div>
		);
	}
}
