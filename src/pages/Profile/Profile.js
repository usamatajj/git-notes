import React, { Component } from "react";
import ProfileGists from "components/ProfileGists/ProfileGists";
import ProfileContent from "components/ProfileContent/ProfileContent";
import { ProfileView } from "./Profile.styles";
import { withAuth } from "hoc/withAuth";
import { getGistsByUser } from "api/gist.service";
import { withRouter } from "hoc/withRouter";
import withErrorBoundaries from "hoc/withErrorBoundaries";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { gists: [] };
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      router: {
        params: { username: prevUsername },
      },
    } = this.props;
    const {
      router: {
        params: { username: currUsername },
      },
    } = this.props;
    if (currUsername !== prevUsername)
      getGistsByUser(username).then((response) =>
        this.setState({ gists: response })
      );
  }

  componentDidMount() {
    const {
      router: {
        params: { username },
      },
    } = this.props;
    getGistsByUser(username).then((response) =>
      this.setState({ gists: response })
    );
  }
  render() {
    const { gists } = this.state;
    return (
      <ProfileView>
        {gists.length !== 0 && (
          <>
            <ProfileContent profile={gists[0]?.owner} />
            <ProfileGists gists={gists} />
          </>
        )}
      </ProfileView>
    );
  }
}

export default withRouter(withAuth(Profile));
