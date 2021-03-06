import Exporter from './exporter';

export default class UserExporter extends Exporter {
    constructor() {
        super();
        this.output = 'output/users.csv';
        this.header = 'login,id,node_id,avatar_url,gravatar_id,url,html_url,followers_url,following_url,gists_url,starred_url,subscriptions_url,organizations_url,repos_url,events_url,received_events_url,type,site_admin\n';
    }


    process(data) {
        this.data = {
            'login': data.login,
            'id': data.id,
            'node_id': data.node_id,
            'avatar_url': data.avatar_url,
            'gravatar_id': data.gravatar_id,
            'url': data.url,
            'html_url': data.html_url,
            'followers_url': data.followers_url,
            'following_url': data.following_url,
            'gists_url': data.gists_url,
            'starred_url': data.starred_url,
            'subscriptions_url': data.subscriptions_url,
            'organizations_url': data.organizations_url,
            'repos_url': data.repos_url,
            'events_url': data.events_url,
            'received_events_url': data.received_events_url,
            'type': data.type,
            'site_admin': data.site_admin,
        };
    }

    write() {
        const data = this.data;
        const str = `${data.login},${data.id},${data.node_id},${data.avatar_url},${data.gravatar_id},${data.url},${data.html_url},${data.followers_url},${data.following_url},${data.gists_url},${data.starred_url},${data.subscriptions_url},${data.organizations_url},${data.repos_url},${data.events_url},${data.received_events_url},${data.type},${data.site_admin}\n`;
        this.write_csv(str);
    }
}
