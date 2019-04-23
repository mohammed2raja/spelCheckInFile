'use strict';

/* Globals */

angular.module('gbApp.globals', []);

angular.module('gbApp.globals').service('GlobalService', ['$location', '$rootScope', '$interval',
    function ($location, $rootScope, $interval) {
        var globalObj = {};
        globalObj.debug = 1;
        globalObj.infoserverTimeout = 120000;
	globalObj.fileuploadDelay = 10000;
        globalObj.dashboardSecurity = false;
        globalObj.mainTitle = "Glassbeam - Product Intelligence on Demand";
        //--------------- this mps below will be used for ui configuration APIs--------------------//
        globalObj.gbstudio_manufacturer = "default";
        globalObj.gbstudio_product = "default";
        globalObj.gbstudio_schema = "default";
        globalObj.showVersionOnHelpModal = true;
        globalObj.usertracking_details_limit = 5;
        globalObj.ruleValidationSameSectionAsLogic = " section should be part of logic field.";
        globalObj.errorMsgs = {
            '100': 'Infoserver is down',
            '200': 'H2 is down',
            '300': 'LCP is down',
            '400': 'Tableau server is down',
            '500': 'Logi server is down',
            '600': 'GBStudio server is down'
        };
        var me = this;
        me.trackAPICallTimer = $interval(function () {
            me.getAPIDuration();
        }, 2000);
        this.setGlobals = function (adminEmail) {
            globalObj.event_group_instance_bucket_size = 1000;
            globalObj.event_group_instance_bucket_offset = 200;
            globalObj.event_group_tab = true;
            globalObj.event_group_tab_label = "Event Patterns";
            globalObj.event_group_tab_confirm_limit_min = 5000;
            globalObj.event_group_tab_confirm_limit_max = 10000;
            globalObj.event_group_tab_confirm_limit_min_msg = "Grouping events uses Clustering techniques of Machine Learning to find similar patterns.<br>This process can take few tens of seconds to few minutes depending on the amount of data being analyzed";
            globalObj.event_group_tab_confirm_limit_max_msg = "<p>Grouping events uses Clustering techniques of Machine Learning to find similar patterns.<br>The number of events being sent is greater than " + globalObj.event_group_tab_confirm_limit_max + " and hence can take several minutes.<br>Hence only first " + globalObj.event_group_tab_confirm_limit_max + " records will be used for finding event patterns. </p><br>You can continue or cancel this and reduce the number of search results using filters and then click on group events.​";
            globalObj.application_api_timeout = 45;
            globalObj.apiCallCancelMsg = "Unable to load data, please try again.";
            globalObj.logview_data_not_available = "Data Not Available";
            globalObj.show_gb_tour_icon = true;
            globalObj.dashmodeadminemail = adminEmail;
            globalObj.minAttrSearch = 2;
            globalObj.attrSearchSpecialCharecterMsg = "Search should not contain special characters.";
            //Dashboard Email Config
            globalObj.emailLinkSub = "Link to dashboard: ";
            globalObj.emailLinkMsg = "Hello%2C%0A%0APlease find the link to <b>";
            globalObj.emailLinkFooter = "%0A%0AThank You.";
            //Facet Limit Configrations
            globalObj.limitFacet = 100;
            globalObj.limitFacetTotal = 200;
            globalObj.limitFacetMsg1 = "Number of facets count for a facet category exceeds the maximum allowed facets. Please refine your search. Max limit is: ";
            globalObj.limitFacetTotalMsg1 = "Total number of facets count exceeds the maximum allowed facets. Please refine your search. Max limit is: ";
            //Facet Limit Configrations Ends
            globalObj.maxAlertInputLimit = 100;
            globalObj.changeOwnerErrorMsg = "There was a problem changing the owner. Please contact support@glassbeam.com"
            globalObj.schReportrecp = "Recipients [Comma seperated]";
            globalObj.noEmailError = "Email address field has error. Please enter valid email addresses with comma. [No spaces in between.]";
            globalObj.timeSchError = "Please select correct time.";
            globalObj.weekError = "No days selected. Please select at least one day of the week.";
            globalObj.noExportFormatError = "Please select an Export Format";
            globalObj.timeFormatError = "Time format is not correct. it should be in HH:MM format";
            globalObj.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            globalObj.month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            globalObj.schReportDays = "Days";
            globalObj.dataSourceSelMsg = "This is available only for user created dashboards.";
            globalObj.NoUsersRoleFoundMsg = "No Users Found! Please refine your search.";
            globalObj.schTimeHrs = ["HH", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
            globalObj.schTimeMin = ["MM", "00", "15", "30", "45"];
            globalObj.hrintv = [{
                "key": "1",
                "value": "1 Hr"
            }, {
                "key": "2",
                "value": "2 Hrs"
            }, {
                "key": "4",
                "value": "4 Hrs"
            }, {
                "key": "8",
                "value": "8 Hrs"
            }, {
                "key": "12",
                "value": "12 Hrs"
            }];
            globalObj.weekDay = [{
                "key": "1",
                "value": "1st"
            }, {
                "key": "2",
                "value": "2nd"
            }, {
                "key": "3",
                "value": "3rd"
            }, {
                "key": "4",
                "value": "4th"
            }];
            globalObj.exportCsvTitle = "Export CSV";
            globalObj.roleAssignTitle = "Assign view access";
            globalObj.bottom10Title = "Bottom 10 Entries";
            globalObj.top10Title = "Top 10 Entries";
            //Health Check Summary Dashboard Dtype
            globalObj.HealthCheckSummary = "HealthCheckSummary";
            //Enable Disable Facet Stats Graph
            globalObj.enableFacetStats = true;
            globalObj.noOfRecordsLbl = "No Of Records";
            globalObj.freqTitle = "Frequency";
            globalObj.schReportOptions = "Options";
            globalObj.noScheduling = "There is no scheduling setup for this report. Please enable scheduling and configure scheduling for this report.";
            globalObj.minNoOFRecords = 1;
            globalObj.maxNoOFRecords = 10000;
            globalObj.pagesizecsv = 1000;
            globalObj.help_link_1 = "https://glassbeam.com/videos";
            globalObj.help_link_2 = "https://gbui.glassbeam.com/help/AboutGlassbeamAnalytics.html";
            globalObj.help_link_3 = "https://glassbeam.com/glassbeam_explorer_manual";
            globalObj.help_link_4 = "https://glassbeam.com/glassbeam_explorer_manual";
            globalObj.gbstudio_invalid_project = "Oops! The project you clicked does not exist!<br>This could happen if you deleted this project from GB Studio. If this is not the case, contact <a class='email-link' href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.studio_down_message = "Error-" + Object.keys(globalObj.errorMsgs)[5] + ".Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.html2canvasUrl = "lib/angular-feedback/html2canvas.js";
            globalObj.redirect_login_url = $location.protocol() + "://" + $location.host() + '/login/index.html';
            globalObj.passwd_maxlimit = 30;
            globalObj.tag_maxlimit = 50;
            globalObj.tag_truncatelimit = 15;
            globalObj.explorerToRulesLabel = "Create rule";
            globalObj.schReportTitle = "Schedule Report";
            globalObj.gb_studio_spl_realms = ['gbstudio_spl'];
            globalObj.gb_studio_apps_realms = ['gbstudio_apps'];
            globalObj.noSummaryDashboardMsg = "Oops! There is no summary dashboard found!";
	    globalObj.gb_demo_apps_realms = ['demo','poc'];
            globalObj.gb_studio_protocol = "https";
            globalObj.alerts_by_bundle_table = "triggers_by_bundleid";
            globalObj.dashboard_link_endcustomer_label = 'endcustomer_name';
            globalObj.dashboard_link_endcustomer_value = 'islCustomer';
            globalObj.help_link_local = $location.protocol() + "://" + $location.host() + "/help/AboutGlassbeamAnalytics.html";
            globalObj.help_link_global = "https://gblogin.glassbeam.com/help/AboutGlassbeamAnalytics.html";
            globalObj.max_views_limit = 50;
            globalObj.max_sysid_limit = 250;
            globalObj.gbUserOrgType = 1000;
            globalObj.studioUserOrgType = 100;
 	    globalObj.wbUserOrgType = 10000;
            // Used for limiting count of Sys ID on Apps page
            globalObj.no_of_bundles = 10;
            globalObj.rescursionLimit = 4;
            globalObj.hasAccessToUnsupportedRules = true;
            globalObj.max_views_msg = "You cannot save more than " + globalObj.max_views_limit + " views.";
            globalObj.at_least_one_section = "Please select at least one section which has data!";
            globalObj.at_least_two_section = "Please select at least two sections which has data!";
            globalObj.no_common_column = "The selected sections do not have any common columns!";
            globalObj.char_limit_msg = 'You can type only 120 characters.';
            globalObj.invalid_old_passwd = 'Invalid old password.';
            globalObj.session_timeout_msg = 'Your session is timed out. Please login again';
            globalObj.dashModeError = 'Error! Dashboard not found. Please check dashboard link or contact <a href="mailto:'+adminEmail+'">'+adminEmail+'</a>';
            globalObj.dashModePermissionError = "Error! You don't have permission to view this dashboard.";
            globalObj.passwd_change_success = 'Password changed successfully.';
            globalObj.passwd_change_failure = 'Failed to change password.';
            globalObj.filter_fail = 'Your search doesn\'t match any dashboards. Kindly refine your search.';
            globalObj.col_filter_fail = 'Your search doesn\'t match any records. Kindly refine your search.';
            globalObj.no_dashboard = 'No dashboards available.';
            globalObj.no_end_customer = 'No Customer configured for the user';
            globalObj.allDashboards = 'All dashboards';
            globalObj.internalDashboards = 'Internal dashboards';
            globalObj.userCreatedDashboards = 'User created dashboards';
            globalObj.info_server_down = "Error-" + Object.keys(globalObj.errorMsgs)[0] + ".Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.tableau_auth_failed = "Your machine is not configured to open the report. Please contact <a class='email-link' href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.config_fail = "Failed to load configuration. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.data_fail = "Failed to load data. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.filter_limit = 100;
            globalObj.max_obs_limit = 10;
            globalObj.min_obs_limit = 2;
            globalObj.rc_threshold = 500;
            globalObj.no_data = 'No data found.';
            globalObj.no_diff_data = 'No data found for this section';
            globalObj.no_diff_data_label = 'Sections with no diff found';
            globalObj.instance_limit = 7;
            globalObj.instance_filter_section_page_size = 5;
            globalObj.instance_selected_sections_limit = 5;
            globalObj.instance_delete_view_fail = "Unable to delete. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                globalObj.instance_setDefault_view_fail = "Unable to change default setting. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                globalObj.instance_accessibility_view_fail = "Unable to change visibility. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                globalObj.instance_view_changes_disabled_msg = 'Table view is not applicable for all sections.<br>Please deselect "Select All" option from section list.';
            globalObj.instance_view_max_section_table = 'You can not select more than ' + globalObj.instance_selected_sections_limit + ' sections for table view.';
            globalObj.instance_view_max_section_diff = 'You can not select more than ' + globalObj.instance_selected_sections_limit + ' sections for diff.';
            globalObj.instance_viewer_displayfield = {
                'sysId': 'Serial no'
            };
            globalObj.instance_limit_msg = "You can only add a maximum of " + globalObj.instance_limit +" instances.";

            globalObj.dashboard_img_logi_path = "https://gbreports.glassbeam.com/DashboardThumbnails";
            globalObj.workbench_server_down = "Some dashboards are unable to load. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.unauthorized_user = "You are not authorized to access this feature. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.unauthorized_user_workbench = "You are not authorized to access some of the dashboards. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.upload_log_auth_failed = "You are either not authorized or logged in from some other window. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.dashboard_not_found = "Dashboard not found. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.dashboard_collapse = "Please clear the search field to collapse.";
            globalObj.dashboard_tagname_max_len = "Tag name cannot have more than " + globalObj.tag_maxlimit + ' characters';
            globalObj.dashboard_tagname_special_char = "Tag name must have only alphanumeric characters.";
            globalObj.dashboard_tagbname_duplicate = "Duplicate tag name for : ";
            globalObj.datasource_length = 50;
            globalObj.workbook_max_length = 30;
            globalObj.workbook_title_max_length = 50;
            globalObj.default_landing_page = "sectionview";
            globalObj.default_landing_label = "Section View";
            globalObj.nav_confirm = "Current view will be lost! Are you sure to navigate ?? ";
            globalObj.clear_view_confirm = "Are you sure to loose the current view?";
            globalObj.no_cols = "No columns selected. Please select one or more columns to see data.";
            globalObj.lasthour = "Last hour";
            globalObj.today = "Today";
            globalObj.yesterday = "Yesterday";
            globalObj.thisweek = "This week";
            globalObj.thismonth = "This month";
            globalObj.last2days = "Last 2 days";
            globalObj.last7days = "Last 7 days";
            globalObj.last30days = "Last 30 days";
            globalObj.mostrecent = "Most recent log";
            globalObj.explorerHideQucikFilter = true;
            globalObj.last5 = "Last 5 logs";
            globalObj.last10 = "Last 10 logs";
            globalObj.customdate = "Custom Date Range";
            globalObj.select_section = 'Please select one or more sections to start';
            globalObj.dashboards = 'partials/dashboards.html';
            globalObj.healthcheck = 'partials/health_check_dashboards.html';
            globalObj.sectionview = 'partials/sectionview.html';
            globalObj.trendsview = 'partials/trendsview.html';
            globalObj.configdiff = 'partials/configdiff.html';
            globalObj.adminUrl = 'admin/manageuser.html';
            globalObj.logStatusUrl = 'logstatus/index.html';
            globalObj.intanceviewer_iframe_apps = ['dashboard', 'tableau', 'permissions', 'nsr', 'apps'];
            globalObj.intanceviewer_event = 'partials/instance-viewer/event.html';
            globalObj.intanceviewer_section = 'partials/instance-viewer/section.html';
            globalObj.eventViewerBucketSize = 1000;
            globalObj.apps = 'partials/apps.html';
            globalObj.explorer = 'partials/explorer.html';
            globalObj.logvault = 'partials/logvault.html';
            globalObj.workbench = 'partials/workbench.html';
            globalObj.workbench_old = 'partials/workbench_old.html';
            globalObj.rules_and_alerts = 'partials/rules-and-alerts/rules_and_alerts.html';
            globalObj.file_upload = 'partials/upload_page.html';
            globalObj.rules_list = 'partials/rules-and-alerts/rules_list.html';
            globalObj.uns_rules_list = 'partials/uns-rules-and-alert/rules_list.html';
            globalObj.uns_add_rule = 'partials/uns-rules-and-alert/add_rule.html';
            globalObj.uns_test_rule_history = 'partials/uns-rules-and-alert/test_rule_history.html';
            globalObj.test_rule_history = 'partials/rules-and-alerts/test_rule_history.html';
            globalObj.add_rule = 'partials/rules-and-alerts/add_rule.html';
            globalObj.add_category = 'partials/rules-and-alerts/add_category.html';
            globalObj.manage_template = 'partials/rules-and-alerts/manage_template.html';
            globalObj.add_edit_template = 'partials/rules-and-alerts/add_edit_template.html';
            globalObj.manage_API_template = 'partials/rules-and-alerts/manage_API_template.html';
            globalObj.add_edit_API_template = 'partials/rules-and-alerts/add_edit_API_template.html';
            globalObj.api_admin_config = 'partials/rules-and-alerts/api_admin_config.html';
            globalObj.api_admin_config_register = 'partials/rules-and-alerts/api_admin_config.html';
            globalObj.search_bundle_url = "?";
            globalObj.last1byme = "Most recent log uploaded by me";
            globalObj.last5byme = "Last 5 logs uploaded by me";
            globalObj.last10byme = "Last 10 logs uploaded by me";
            globalObj.download_base_url = $location.protocol() + "://" + $location.host() + "/download_temp/";
            globalObj.show_category = false;
            globalObj.no_result = "Your search did not match any document. Please refine your search.";
            globalObj.no_result_syntax_error = "Syntax Error: Please refer help document for search syntax.";
            globalObj.events_only = "Compound Search can be made on EVENTs only. Please select the correct option.";
            globalObj.max_evt_attr = 10;
            globalObj.max_evt_attr_msg = "You can only add only a maximum of 10 event attributes.";
            globalObj.linkUrl = "/gb/ui/prod/search/redirecturl.cgi?";
            globalObj.section_ErrorMsg1 = "File difference not available since there are no previous observations for this file.";
            globalObj.section_ErrorMsg2 = "No difference is found for the selected section(s)";
            globalObj.section_ErrorMsg4 = "File size is exceeding the max. limit 20 MB , please download the file";
            globalObj.section_ErrorMsg6 = "Internal system error, Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.section_ErrorMsg7 = "Invalid_session";
            globalObj.section_ErrorMsg8 = "No section(s) data found.";
            globalObj.systemId2 = {
                "common": "System ID",
                "customer": {
                    "springpath": "Node ID"
                }
            };
            globalObj.abort_upld = "Uploading in progress. Do you want to continue?";
            globalObj.file_upld_success = "File(s) uploaded successfully and has been submitted to the processing queue. You can close this window now. You will receive an intimation on E-mail, once the file has been processed.";
            globalObj.file_upld_cancel_all = "Files already uploaded cannot be cancelled as would have started processing. This operation will only cancel files that are in the process of being uploaded.Do you want to continue?"
            globalObj.file_upld_success_email = globalObj.file_upld_success + " You'll receive a mail with the status of processing in few minutes.";
            globalObj.file_upld_limit = 10;
            globalObj.test_log_upload_limit = 1;
            globalObj.file_upld_partial = "Some of the files uploaded successfully, waiting in the queue for processing.";
            globalObj.file_upld_fail = "Failed to upload file(s). Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.file_upld_cancel = "Failed to upload file(s).";
            globalObj.file_upld_unsupported = "File(s) with invalid format not allowed.";
            // Message needs refractoring.
            globalObj.file_upld_limit_exceeded = "You can upload a maximum of " + globalObj.file_upld_limit + " files at once.";
            globalObj.test_log_upload_limit_exceeded = "You can upload a maximum of " + globalObj.test_log_upload_limit + " file at once.";
            globalObj.file_upld_maxsize = "Total file upload size exceed maximum limit : ";
            globalObj.file_upld_suprtd_extns = "tar.gz";
            // globalObj.file_upld_suprtd_extns = "zip, tar, gz, tgz, taz, Z, bz2, tz2, tbz2, tbz, lz, lzma, tlz, lzo, xz, tar.gz, tar.tgz, tar.taz, tar.Z, tar.bz2, tar.tz2, tar.tbz2, tar.tbz, tar.lz, tar.lzma, tar.tlz, tar.lzo, tar.xz, rar, 7z, txt";
            globalObj.download_failed = "Failed to download !";
            globalObj.invalid_chars = "Special characters not allowed.";
            globalObj.duplicate_view = "View with this name already exist for other user.";
            globalObj.overwrite_view = "View with this name already exist for the user. This will overwrite it with the new name.";
            globalObj.invalid_minlength = "View name should contain atleast 3 characters.";
            globalObj.invalid_maxlength_desc = "View description should contain maximum 250 characters.";
            globalObj.required_vname = "Please enter view name.";
    globalObj.help_link_global = "https://gblogin.glassbeam.com/help/Welcome11111.html";
            globalObj.save_view_success = "View Saved successfully";
            globalObj.view_delete_confirmation = "Are you sure you want to delete this section view ?";
            globalObj.facets_limit = 25;
            globalObj.sectionViewDefaulTab = "section";
            globalObj.no_datasources = "No datasources found. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.nsr_alert_msg = "NSR report is not available";
            globalObj.select_bundle_to_upload_for_test = "<p>Select one or more logs to be used for testing your selected rule(s).</p><p>You can use filters on the left to zero in on the logs you need.</p>";
            //globalObj.redirect_new_window = $location.protocol() +"://"+$location.host()+ "/gb/ui/prod/main.cgi";
            globalObj.redirect_new_window = window.location.href.split('?')[0];
            globalObj.download_max_limit = 100 * 1024 * 1024;
            globalObj.download_message = "Total download size should not exceed " + (globalObj.download_max_limit / 1024 / 1024) + " MB";
            globalObj.stop_words_found = "Please expand your search by providing additional keywords.<br>Words you have specified are too common and result in too many matches.";
            globalObj.conditional_operators_invalid = "\"AND,OR,NOT\" are conditional operators and required operands also.";
	    globalObj.fileupload_mandatory_label = "Field marked with * is compulsory";
            // key remain fix and value will change
            globalObj.nsrParams = {
                'sysid1': 'selected_system',
                'obs_date': 'selected_date',
                'bundle_id': 'selected_bundle'
            };

            //Error page
            globalObj.errorPageTitle = "Glassbeam | Error";
            globalObj.errorPageMsgHeader = "Glassbeam Authentication Error";
            globalObj.mailToGlassbeamSupport = "mailto:" + adminEmail + "?subject=";
            globalObj.errorContactMsg = "Please contact your system administrator or ";
            globalObj.errorGlassbeamSupport = "Glassbeam Support";
            globalObj.errorPageUnauthorized = "### is not authorized to use Glassbeam application";
            globalObj.errorPageNoDataFound = "No data available for ###";
            globalObj.errorPageStatusNoData = "User unable to login, no data available";
            globalObj.glassbeamHomeUrl = "http://www.glassbeam.com";
            globalObj.noUserEndCustomerError = "No End Customer assigned to this user. Please contact";
            globalObj.supportEmail = adminEmail;

            //Left nav title
            globalObj.navExplorer = "Explorer";
            globalObj.navApps = "Apps";
            globalObj.navWorkbench = "Workbench";
            globalObj.navSupport = "Support Portal";
            globalObj.navHealth = "Health Check";
            globalObj.navDashboards = "Dashboards";
            globalObj.navRules = "Rules & Alerts";
            globalObj.navLog = "Log Vault";
            globalObj.navUpload = "File Upload";

            globalObj.addRuleVersionFields = ["sys_version"];
            globalObj.lastModifiedArray = [{
                name : "Last 24 Hrs",
                value: "24hrs",
                checked: false
            },{
                name : "Last Week",
                value: "week",
                checked: false
            },{
                name : "Last Month",
                value: "month",
                checked: false
            },{
                name : "Last 6 Month",
                value: "6month",
                checked: false
            }];

            // Operators that can be used in a rule logic
            globalObj.rulesOperators = [{
                label: '+',
                text: ' + ',
                enabled: true,
                positionInc: 3,
                type: 'operator',
                subtype: 'arithmetic',
                tooltip: 'Addition'
            }, {
                label: '-',
                text: ' - ',
                enabled: true,
                positionInc: 3,
                type: 'operator',
                subtype: 'arithmetic',
                tooltip: 'Subtraction'
            }, {
                label: '*',
                text: ' * ',
                scalaOperator: '*',
                enabled: true,
                positionInc: 3,
                type: 'operator',
                subtype: 'arithmetic',
                tooltip: 'Multiplication'
            }, {
                label: '/',
                text: ' / ',
                enabled: true,
                positionInc: 3,
                type: 'operator',
                subtype: 'arithmetic',
                tooltip: 'Division'
            }, {
                label: '<=',
                text: ' <= ',
                scalaOperator: '<=',
                enabled: true,
                positionInc: 4,
                type: 'operator',
                subtype: 'comparison',
                tooltip: 'Less than or equal to'
            }, {
                label: '>=',
                text: ' >= ',
                scalaOperator: '>=',
                enabled: true,
                positionInc: 4,
                type: 'operator',
                subtype: 'comparison',
                tooltip: 'Greater than or equal to'
            }, {
                label: '<>',
                text: ' <> ',
                scalaOperator: '!=',
                enabled: true,
                positionInc: 4,
                type: 'operator',
                subtype: 'equal comparison',
                tooltip: 'Not equals'
            }, {
                label: '=',
                text: ' = ',
                scalaOperator: '==',
                enabled: true,
                positionInc: 3,
                type: 'operator',
                subtype: 'equal comparison',
                tooltip: 'Equals'
            }, {
                label: '<',
                text: ' < ',
                scalaOperator: '<',
                enabled: true,
                positionInc: 3,
                type: 'operator',
                subtype: 'comparison',
                tooltip: 'Less than'
            }, {
                label: '>',
                text: ' > ',
                scalaOperator: '>',
                enabled: true,
                positionInc: 3,
                type: 'operator',
                subtype: 'comparison',
                tooltip: 'Greater than'
            }, {
                label: 'NOT LIKE',
                text: ' NOT LIKE \'%%\' ',
                scalaOperator: 'contains',
                enabled: true,
                positionInc: 11,
                type: 'operator',
                subtype: 'inline function',
                tooltip: 'NOT LIKE operator'
            }, {
                label: 'LIKE',
                text: ' LIKE \'%%\' ',
                scalaOperator: 'contains',
                enabled: true,
                positionInc: 8,
                type: 'operator',
                subtype: 'inline function',
                tooltip: 'LIKE operator'
            }, {
                label: 'AND',
                text: ' AND ',
                scalaOperator: '&&',
                enabled: true,
                positionInc: 5,
                type: 'operator',
                subtype: 'logical',
                tooltip: 'Logical AND operator'
            }, {
                label: 'OR',
                text: ' OR ',
                scalaOperator: '||',
                enabled: true,
                positionInc: 4,
                type: 'operator',
                subtype: 'logical',
                tooltip: 'Logical OR operator'
            }, {
                label: 'IS NULL',
                text: ' IS NULL ',
                scalaOperator: '.isEmpty',
                enabled: true,
                positionInc: 9,
                type: 'operator',
                subtype: 'equal null',
                tooltip: 'Is Empty'
            }, {
                label: 'IS NOT NULL',
                text: ' IS NOT NULL ',
                scalaOperator: '.isEmpty',
                enabled: true,
                positionInc: 13,
                type: 'operator',
                subtype: 'equal null',
                tooltip: 'Is not Empty'
            }];

            // Functions that can be used in a rule logic
            globalObj.rulesFunctions = [{
                label: 'LOWER',
                text: ' LOWER() ',
                scalaOperator: 'toLowerCase',
                enabled: true,
                positionInc: 8,
                type: 'function',
                tooltip: 'Convert to lower case'
            }, {
                label: 'UPPER',
                text: ' UPPER() ',
                scalaOperator: 'toUpperCase',
                enabled: true,
                positionInc: 8,
                type: 'function',
                tooltip: 'Convert to upper case'
            }, {
                label: 'CONVERTTOINT',
                text: ' CONVERTTOINT() ',
                scalaOperator: 'toLong',
                enabled: true,
                positionInc: 15,
                type: 'function',
                tooltip: 'Convert to Integer'
            }, {
                label: 'CONVERTTOSTRING',
                text: ' CONVERTTOSTRING() ',
                scalaOperator: 'toString',
                enabled: true,
                positionInc: 18,
                type: 'function',
                tooltip: 'Convert to String'
            }, {
                label: 'REGEX',
                text: ' REGEX() ',
                scalaOperator: 'toRegex',
                enabled: true,
                positionInc: 8,
                type: 'function',
                tooltip: 'Write Regex'
            },  {
                label: 'VERSION',
                text: ' VERSION() > \'%%\' ',
                scalaOperator: 'toVersion',
                enabled: true,
                positionInc: 10,
                type: 'function',
                tooltip: 'Version function'
            }, {
                label: 'TIMEDIFF',
                text: ' TIMEDIFF(REGEX(), REGEX()) > 1 ',
                scalaOperator: 'TIMEDIFF',
                enabled: false,
                positionInc: 15,
                type: 'function',
                tooltip: 'Time diff function'
            }];

            globalObj.rulesAggregateFunction = [{
                label: 'COUNT',
                text: ' COUNT() ',
                scalaOperator: 'toCounter',
                enabled: true,
                positionInc: 8,
                type: 'function',
                tooltip: 'Count function'
            },{
                label: 'SUM',
                text: ' SUM() > 1 ',
                scalaOperator: 'SUM',
                enabled: true,
                positionInc: 5,
                type: 'function',
                tooltip: 'Sum of a column'
            }, {
                label: 'AVG',
                text: ' AVG() > 1 ',
                scalaOperator: 'AVG',
                enabled: true,
                positionInc: 5,
                type: 'function',
                tooltip: 'Average value of an attribute'
            }, {
                label: 'MIN',
                text: ' MIN() > 1 ',
                scalaOperator: 'MIN',
                enabled: true,
                positionInc: 5,
                type: 'function',
                tooltip: 'Minimum value of an attribute'
            }, {
                label: 'MAX',
                text: ' MAX() > 1 ',
                scalaOperator: 'MAX',
                enabled: true,
                positionInc: 5,
                type: 'function',
                tooltip: 'Maximun value of an attribute'
            }];

            globalObj.rulesFunctions = globalObj.rulesFunctions.concat(globalObj.rulesAggregateFunction);

            // Status of rule in DB for each of the status defined on UI
            globalObj.rulesSupportedStatus = {
                Enabled: 'ENABLED',
                Disabled: 'DISABLED',
                Draft: 'DRAFT'
            };
            // Status of rule in DB for each of the status defined on UI
            globalObj.rulesHistoryTypesOfChanges = {
                'created':'Created', 
                'state':'State change', 
                'metadata': 'Metadata change', 
                'ownership': 'Ownership change', 
                'logic': 'Logic change', 
                'multiple': 'multiple changes'
            };
            globalObj.ruleCreatorFielName = "rule_creator";
            // Supported Scopes of Rules
            globalObj.rulesScopes = ['Table', 'File', 'Bundle'];

            // Supported Max Limits of Rules
            globalObj.rulesMaxLimits = ['100'];

            // Supported Max Limits Alerts to be displayed

            globalObj.rulesMaxLimitsDisplay = 99;

            // Default Sort Field of Rules List page
            globalObj.rulesSortField = "modified_ts";

            // Default Sort Field of Templates List page
            globalObj.templatesSortField = "template_id";

            globalObj.ruleStatusChangeCommentMinLen = 4;

            globalObj.ruleStatusChangeCommentMaxLen = 500;

            // The columns that are visible on Rules List page for each rule
            globalObj.rulesColumns = [{
                field: "rule_name",
                title: "Rule ID",
                selected: true,
                enabled: true
            }, {
                field: "category",
                title: "Category",
                selected: false,
                enabled: true
            }, {
                field: "label_display",
                title: "Label",
                selected: true,
                enabled: true
            }, {
                field: "description",
                title: "Description",
                selected: true,
                enabled: true
            }, {
                field: "author",
                title: "Author",
                selected: true,
                enabled: true
            }, {
                field: "priority",
                title: "Priority",
                selected: false,
                enabled: true
            }, {
                field: "severity",
                title: "Severity",
                selected: false,
                enabled: true
            }, {
                field: "action",
                title: "Action",
                selected: false,
                enabled: false
            }, {
                field: "created_by",
                title: "Created By",
                selected: true,
                enabled: true
            }, {
                field: "created_ts",
                title: "Created On",
                selected: true,
                enabled: true
            }, {
                field: "modified_by",
                title: "Modified By",
                selected: true,
                enabled: true
            }, {
                field: "modified_ts",
                title: "Modified On",
                selected: true,
                enabled: true
            }, {
                field: "status",
                title: "Status",
                selected: false,
                enabled: true
            }];

            // The columns that are visible on Rules List page for each rule
            globalObj.rulesColumnsForExport = [{
                field: "rule_name",
                title: "Rule ID",
                enabled: true
            }, {
                field: "category",
                title: "Category",
                enabled: true
            }, {
                field: "label_display",
                title: "Label",
                enabled: true
            }, {
                field: "description",
                title: "Description",
                enabled: true
            }, {
                field: "author",
                title: "Author",
                enabled: true
            }, {
                field: "priority",
                title: "Priority",
                enabled: true
            }, {
                field: "severity",
                title: "Severity",
                enabled: true
            }, {
                field: "created_by",
                title: "Created By",
                enabled: true
            }, {
                field: "created_ts",
                title: "Created On",
                enabled: true
            }, {
                field: "modified_by",
                title: "Modified By",
                enabled: true
            }, {
                field: "modified_ts",
                title: "Modified On",
                enabled: true
            }, {
                field: "status",
                title: "Status",
                enabled: true
            }, {
                field: "scope",
                title: "Scope",
                enabled: true
            }, {
                field: "logic_display",
                title: "Logic",
                enabled: true
            }, {
                field: "text_display",
                title: "Text",
                enabled: true
            }, {
                field: "label_display",
                title: "Label",
                enabled: true
            }, {
                field: "recommendation_display",
                title: "Recommendation",
                enabled: true
            }, {
                field: "alert_justification_display",
                title: "Justification",
                enabled: true
            }];
            // The columns that are visible on Unsupported Rules List page for each rule
            globalObj.usRulesColumns = [{
                field: "category",
                title: "Category",
                enabled: true
            }, {
                field: "label_display",
                title: "Label",
                enabled: true
            }, {
                field: "description",
                title: "Description",
                enabled: true
            }, {
                field: "author",
                title: "Author",
                enabled: true
            }, {
                field: "priority",
                title: "Priority",
                enabled: true
            }, {
                field: "severity",
                title: "Severity",
                enabled: true
            }, {
                field: "action",
                title: "Action",
                enabled: false
            }, {
                field: "status",
                title: "Status",
                enabled: true
            }];

            // The columns that are visible on Rules List page for each rule
            globalObj.rulesColumns = [{
                field: "rule_name",
                title: "Rule ID",
                selected: true,
                enabled: true
            }, {
                field: "category",
                title: "Category",
                selected: false,
                enabled: true
            }, {
                field: "label_display",
                title: "Label",
                selected: true,
                enabled: true
            }, {
                field: "description",
                title: "Description",
                selected: true,
                enabled: true
            }, {
                field: "author",
                title: "Author",
                selected: false,
                enabled: true
            }, {
                field: "priority",
                title: "Priority",
                selected: false,
                enabled: true
            }, {
                field: "severity",
                title: "Severity",
                selected: false,
                enabled: true
            }, {
                field: "action",
                title: "Action",
                selected: false,
                enabled: false
            }, {
                field: "created_by",
                title: "Created By",
                selected: true,
                enabled: true
            }, {
                field: "created_ts",
                title: "Created On",
                selected: true,
                enabled: true
            }, {
                field: "modified_by",
                title: "Modified By",
                selected: true,
                enabled: true
            }, {
                field: "modified_ts",
                title: "Modified On",
                selected: true,
                enabled: true
            }, {
                field: "status",
                title: "Status",
                selected: true,
                enabled: true
            }, {
                field: "rule_owner",
                title: "Owner",
                selected: true,
                enabled: true
            },{
                field: "email_template_name",
                title: "Email Template",
                selected: false,
                enabled: true
            },{
                field: "api_template_name",
                title: "Api Template",
                selected: false,
                enabled: true
            }];

            // The columns that are visible on Unsupported Rules List page for each rule
            globalObj.usRulesColumns = [{
                field: "category",
                title: "Category",
                enabled: true
            }, {
                field: "label_display",
                title: "Label",
                enabled: true
            }, {
                field: "description",
                title: "Description",
                enabled: true
            }, {
                field: "author",
                title: "Author",
                enabled: true
            }, {
                field: "priority",
                title: "Priority",
                enabled: true
            }, {
                field: "severity",
                title: "Severity",
                enabled: true
            }, {
                field: "action",
                title: "Action",
                enabled: false
            }, {
                field: "status",
                title: "Status",
                enabled: true
            }];
            // The columns that are displayed on Test Rule page for displaying details of tested rules when expanded on left side(Not used anymore)
            globalObj.testRuleColumns = [{
                field: "description",
                title: "Description",
                enabled: true
            }, {
                field: "author",
                title: "Author",
                enabled: true
            }, {
                field: "category",
                title: "Category",
                enabled: true
            }, {
                field: "severity",
                title: "Severity",
                enabled: true
            }, {
                field: "priority",
                title: "Priority",
                enabled: true
            }, {
                field: "action",
                title: "Action",
                enabled: false
            }, {
                field: "kb_link",
                title: "KB Link",
                enabled: true
            }, {
                field: "recommendation",
                title: "Recommendation",
                enabled: true
            }, {
                field: "text_display",
                title: "Text",
                enabled: true
            }, {
                field: "logic_display",
                title: "Logic",
                enabled: true
            }];

            // The columns that are displayed on Test Rule page for displaying details of tested rules when opened in a modal box
            globalObj.testRuleHistoryColumns = [{
                field: "label_display",
                title: "Label",
                enabled: true
            }, {
                field: "author",
                title: "Author",
                enabled: true
            }, {
                field: "category",
                title: "Category",
                enabled: true
            }, {
                field: "severity",
                title: "Severity",
                enabled: true
            }, {
                field: "priority",
                title: "Priority",
                enabled: true
            }, {
                field: "action",
                title: "Action",
                enabled: false
            },{
                field: "recommendation_display",
                title: "Recommendation",
                enabled: true
            }, {
                field: "text_display",
                title: "Text",
                enabled: true
            }, {
                field: "logic_display",
                title: "Logic",
                enabled: true
            }];

            // The columns that are displayed on Test Rule page for displaying details of tested unsupported rules when opened in a modal box
            globalObj.unsupportedTestRuleHistoryColumns = [{
                field: "label_display",
                title: "Label",
                enabled: true
            }, {
                field: "author",
                title: "Author",
                enabled: true
            }, {
                field: "category",
                title: "Category",
                enabled: true
            }, {
                field: "severity",
                title: "Severity",
                enabled: true
            }, {
                field: "priority",
                title: "Priority",
                enabled: true
            }, {
                field: "action",
                title: "Action",
                enabled: false
            }, {
                field: "kb_link",
                title: "KB Link",
                enabled: true
            }, {
                field: "recommendation",
                title: "Recommendation",
                enabled: true
            }, {
                field: "text_display",
                title: "Text",
                enabled: true
            }, {
                field: "col0",
                title: "Col 0",
                enabled: true
            }, {
                field: "col1",
                title: "Col 1",
                enabled: true
            }, {
                field: "col2",
                title: "Col 3",
                enabled: true
            }, {
                field: "col3",
                title: "Col 3",
                enabled: true
            }];

            // The columns that are displayed on Test Rule page for displaying details of tested unsupported rules when expanded on left side(Not used anymore)
            globalObj.unsupportedTestRuleColumns = [{
                field: "description",
                title: "Description",
                enabled: true
            }, {
                field: "author",
                title: "Author",
                enabled: true
            }, {
                field: "category",
                title: "Category",
                enabled: true
            }, {
                field: "severity",
                title: "Severity",
                enabled: true
            }, {
                field: "priority",
                title: "Priority",
                enabled: true
            }, {
                field: "action",
                title: "Action",
                enabled: false
            }, {
                field: "kb_link",
                title: "KB Link",
                enabled: true
            }, {
                field: "recommendation",
                title: "Recommendation",
                enabled: true
            }, {
                field: "text_display",
                title: "Text",
                enabled: true
            }, {
                field: "col0",
                title: "Col 0",
                enabled: true
            }, {
                field: "col1",
                title: "Col 1",
                enabled: true
            }, {
                field: "col2",
                title: "Col 2",
                enabled: true
            }, {
                field: "col3",
                title: "Col 3",
                enabled: true
            }];

            // The columns that are displayed on UI for showing list of templates on Manage Templates page
            globalObj.templatesColumns = [{
                field: "template_name",
                title: "Name",
                enabled: true
            }, {
                field: "to",
                title: "To Address",
                enabled: true
            }, {
                field: "subject",
                title: "Subject",
                enabled: true
            }];

               // The columns  on UI for showing list of API templates on Manage API Templates page
               globalObj.APItemplatesColumns = [{
                field: "apiTemplateName",
                title: "Name",
                enabled: true
            }, {
                field: "apiUrl",
                title: "Base URL",
                enabled: true
            }, {
                field: "apiAuthKey",
                title: "Auth Key",
                enabled: true
            }];

            // The constants which are supported on Add/Edit Template page(Both common and customer wise)
            globalObj.templateConstants = {
                'common': [{
                    key: "Rule Id",
                    value: "{rule_name}",
                    enabled: true
                },
	        {
                    key: "Label",
                    value: "{label_actual}",
                    enabled: true
                }, {
                    key: "Description",
                    value: "{description}",
                    enabled: true
                }, {
                    key: "Cateogory",
                    value: "{cname}",
                    enabled: true
                }, {
                    key: "Author",
                    value: "{author}",
                    enabled: true
                }, {
                    key: "Severity",
                    value: "{sname}",
                    enabled: true
                }, {
                    key: "Priority",
                    value: "{pname}",
                    enabled: true
                }, {
                    key: "KB Link",
                    value: "{kb_link}",
                    enabled: true
                }, {
                    key: "Recommendation",
                    value: "{recommendation}",
                    enabled: true
                }, {
                    key: "Text",
                    value: "{alert_msg}",
                    enabled: true
                }, {
                    key: "System ID",
                    value: "{sysid1}",
                    enabled: true

                }, {
                    key: "Justification",
                    value: "{justification}",
                    enabled: true

                }],
                'customer': {
                    'aruba': [{
                        key: "End Customer Name",
                        value: "{cust_name}",
                        enabled: true
                    }, {
                        key: "Ticket Number",
                        value: "{ticket_num}",
                        enabled: true
                    },
                    {
                        key: "Model",
                        value: "{sys_model}",
                        enabled: true
                    }, {
                        key: "Version",
                        value: "{sys_version}",
                        enabled: true
                    }],
                    'vce': [{
                        key: "End Customer Name",
                        value: "{cust_name}",
                        enabled: true
                    }, {
                        key: "Ticket Number",
                        value: "{ticket_num}",
                        enabled: true
                    }],
                    'ptc': [{
                        key: "End Customer Name",
                        value: "{cust_name}",
                        enabled: true
                    }, {
                        key: "Ticket Number",
                        value: "{ticket_num}",
                        enabled: true
                    }, {
                        key: "Model",
                        value: "{sys_model}",
                        enabled: true
                    }, {
                        key: "Version",
                        value: "{sys_version}",
                        enabled: true
                    }],
                    'ge': [{
                        key: 'Customer Name',
                        value: '{customer_name}',
                        enabled: true
                    }, {
                        key: 'Product',
                        value: '{product_name}',
                        enabled: true
                    }, {
                        key: 'SYS Release Version',
                        value: '{version}',
                        enabled: true
                    }]
                }

            };

            // The columns to be shown on Test Results block for supported rules
            globalObj.testGridColumns = [{
                field: "rule_id",
                title: "",
                rules_field: "rule_id",
                enabled: true
            }, {
                field: "label",
                title: "Label",
                rules_field: "label_display",
                enabled: true
            }, {
                field: "sname",
                title: "Severity",
                rules_field: "severity",
                enabled: true
            }, {
                field: "pname",
                title: "Priority",
                rules_field: "priority",
                enabled: true
            }, {
                field: "recommendation",
                title: "Recommendation",
                rules_field: "recommendation",
                enabled: true
            }];

            // Data types defined in ddl for each attribute types
            globalObj.columnDataTypes = {
                'Integer': 'INTEGER',
                'String': 'STRING',
                'Long': 'LONG',
                'Float': 'FLOAT',
                'Double': 'DOUBLE'
            };

            // Supported domains in email templates
            globalObj.templateSupportedDomains = ['glassbeam.com'];

            // List of pages for Rules & Alerts
            globalObj.rulesPages = {
                rules_list: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }],
                add_rule: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'add_rule',
                    label: 'Add/Edit Rule'
                }],
                add_category: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'add_rule',
                    label: 'Add/Edit Rule'
                }, {
                    name: 'add_category',
                    label: 'Add Category'
                }],
                manage_template: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'add_rule',
                    label: 'Add/Edit Rule'
                }, {
                    name: 'manage_template',
                    label: 'Manage Templates'
                }],
                manage_API_template: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'add_rule',
                    label: 'Add/Edit Rule'
                }, {
                    name: 'manage_API_template',
                    label: 'Manage API Templates'
                }],
                add_edit_API_template: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'add_rule',
                    label: 'Add/Edit Rule'
                }, {
                    name: 'manage_API_template',
                    label: 'Manage API Templates'
                }, {
                    name: 'add_edit_API_template',
                    label: 'Add/Edit API Template'
                }],
                add_edit_template: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'add_rule',
                    label: 'Add/Edit Rule'
                }, {
                    name: 'manage_template',
                    label: 'Manage Templates'
                }, {
                    name: 'add_edit_template',
                    label: 'Add/Edit Template'
                }],
                test_rule: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'test_rule',
                    label: 'Test Rule'
                }],
                test_rule_history: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'test_rule_history',
                    label: 'Test Rule History'
                }],
                api_admin_config: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'api_admin_config',
                    label: 'Base Template Config'
                }],
                api_admin_config_register: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'api_admin_config',
                    label: 'Base Template Config'
                }, {
                    name: 'api_admin_config_register',
                    label: 'Add/Edit Base Template'
                }],
                manage_email_template_from_list_page: [{
                    name: 'rules_list',
                    label: 'Rules List'
                }, {
                    name: 'manage_template',
                    label: 'Manage Templates'
                }],
                add_category_from_list_page: [{
                    name: 'rules_list',
                    label: 'Rules List'
                },{
                    name: 'add_category',
                    label: 'Add Category'
                }],
                add_edit_template_from_list_page: [{
                    name: 'rules_list',
                    label: 'Rules List'
                },{
                    name: 'manage_template',
                    label: 'Manage Templates'
                }, {
                    name: 'add_edit_template',
                    label: 'Add/Edit Template'
                }],
                manage_API_template_from_list_page: [{
                    name: 'rules_list',
                    label: 'Rules List'
                },{
                    name: 'manage_API_template',
                    label: 'Manage API Templates'
                }],
                add_edit_API_template_from_list_page: [{
                    name: 'rules_list',
                    label: 'Rules List'
                },{
                    name: 'manage_API_template',
                    label: 'Manage API Templates'
                }, {
                    name: 'add_edit_API_template',
                    label: 'Add/Edit API Template'
                }]
            };
            
            // List of pages for Unsupported Rules & Alerts
            globalObj.unsRulesPages = {
                uns_rules_list: [{
                    name: 'uns_rules_list',
                    label: 'Rules List'
                }],
                uns_add_rule: [{
                    name: 'uns_rules_list',
                    label: 'Rules List'
                }, {
                    name: 'uns_add_rule',
                    label: 'Add/Edit Rule'
                }],
                //add_category: [{ name: 'rules_list', label: 'Rules List'}, {name: 'add_rule', label: 'Add/Edit Rule'}, {name: 'add_category', label: 'Add Category'}],
                //manage_template: [{ name: 'rules_list', label: 'Rules List'}, {name: 'add_rule', label: 'Add/Edit Rule'}, {name: 'manage_template', label: 'Manage Templates'}],
                //add_edit_template: [{ name: 'rules_list', label: 'Rules List'}, {name: 'add_rule', label: 'Add/Edit Rule'}, {name: 'manage_template', label: 'Manage Templates'}, {name: 'add_edit_template', label: 'Add/Edit Template'}],
                uns_test_rule: [{
                    name: 'uns_rules_list',
                    label: 'Rules List'
                }, {
                    name: 'uns_test_rule',
                    label: 'Test Rule'
                }],
                uns_test_rule_history: [{
                    name: 'uns_rules_list',
                    label: 'Rules List'
                }, {
                    name: 'uns_test_rule_history',
                    label: 'Test Rule History'
                }]
            };

            // Common messages for R&A
            globalObj.rulesMsgs = {
                h2_down_msg: "Error-" + Object.keys(globalObj.errorMsgs)[1] + ".Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                lcp_down_msg: "Error-" + Object.keys(globalObj.errorMsgs)[2] + ".Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>", // LCP Down Message
                log_processing_failed: "Unable to copy files to parser. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                bundle_load_failed: "Unable to load list of bundles. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                temp_rule_associated: 'Unable to delete a template associated with a rule',
                temp_rule_multiple_associated_partial: 'Some of the templates associated with a rule. So, could not delete',
                temp_rule_multiple_associated_full: 'All the templates assciated with a rule. So, could not delete',
                temp_load_failed: "Unable to load templates list. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                temp_del_single: ['Are you sure you want to delete the template ', '?'],
                temp_del_multiple: 'Are you sure you want to delete the selected templates',
                temp_del_success: ["Template <strong>", "</strong> deleted successfully"],
                temp_del_rule_associated: ["Unable to delete template <strong>", "</strong> associated with a rule"],
                temp_del_failed: ["Template <strong>", "</strong> failed to delete. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>"],
                temp_field_blank: ' cannot be left blank',
                temp_exists: ['A template with name ', ' already exists'],
                temp_email_invalid: ' is not a valid email address',
                temp_email_unsupported: ' is not a supported domain',
                temp_email_repeated: 'Repetition of email addresses not allowed',
                temp_email_error: "Emails entered are not properly separated by commas",
                temp_invalid_constant: " is not a valid constant",
                category_load_failed: "Unable to load Categories. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                category_rule_associated: 'Unable to delete a category associated with a rule',
                rules_owner_list_not_found: "Owner list is not found!.",
                category_blank_name: 'A category cannot be saved with a blank name',
                category_name_duplicate: 'Duplicate category name not allowed',
                category_delete_success: ["Category <strong>", "</strong> deleted successfully"],
                category_delete_failed: ["Failed to delete category <strong>", "</strong>. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>"],
                category_edit_name_success: ["Category <strong>", "</strong> edited successfully to <strong>", "</strong>"],
                category_edit_name_failed: ["Category <strong>", "</strong> failed to edit to <strong>", "</strong>. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>"],
                category_edit_success: ["Category <strong>", "</strong> successfully edited"],
                category_edit_failed: ["Failed to edit category <strong>", "</strong>. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>"],
                category_add_success: ["Category <strong>", "</strong> added successfully"],
                category_add_failed: ["Failed to add category <strong>", "</strong>. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>"],
                rule_multiple_section_error: 'Rules cannot be defined across more than one sections',
                rule_del_single: ['Are you sure you want to delete the rule <strong>', '</strong>?'],
                rule_del_multiple: 'Are you sure you want to delete the following rules:<br><span class="gb-sub">You can delete rules which are owned by you.</span>',
                rule_test_multiple: 'Following rules are going to be tested:<br /><span class="gb-sub">You can test only <strong>ENABLED</strong> rules.</span>',
                rule_text_error: 'Error in text',
                rule_label_error: 'Error in label',
                rule_justification_error: 'Error in justification',
                rule_recommendation_error: 'Error in recommendation',
                rule_text_invalid_attr: ['{', '} is invalid attribute for text. Only valid attributes can be used within curly braces.'],
                rule_text_local_attr: ['{', '} is not a global attribute for text. Only global attributes can be used within curly braces for File or Bundle level rule.'],
                rule_justification_invalid_attr: ['{', '} is invalid attribute for justification. Only valid attributes can be used within curly braces.'],
                rule_justification_local_attr: ['{', '} is not a global attribute for justification. Only global attributes can be used within curly braces for File or Bundle level rule.'],
                rule_recommendation_invalid_attr: ['{', '} is invalid attribute for recommendation. Only valid attributes can be used within curly braces.'],
                rule_recommendation_local_attr: ['{', '} is not a global attribute for recommendation. Only global attributes can be used within curly braces for File or Bundle level rule.'],
                rule_label_invalid_attr: ['{', '} is invalid attribute for label. Only valid attributes can be used within curly braces.'],
                rule_label_local_attr: ['{', '} is not a global attribute for label. Only global attributes can be used within curly braces for File or Bundle level rule.'],
                rules_load_failed: "Unable to load rules list. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                rules_load_owners_list_failed: "Unable to load owners list. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                update_rule_load_owners_failed: "Unable to change ownership of the rule. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                rule_select_all_error: "This is only applicable for rules which are in <strong>ENABLED</strong> state.",
                rule_delete_select_all_error: "This is only applicable for rules which are owned by you.",
                rule_disable_success: ["Rule <strong>", "</strong> disabled successfully"],
                rule_disable_failed: ["Failed to disable rule <strong>", "</strong>. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>"],
                rule_enable_success: ["Rule <strong>", "</strong> enabled successfully"],
                rule_enable_failed: ["Failed to enable rule <strong>", "</strong>. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>"],
                rule_delete_success: ["Rule <strong>", "</strong> deleted successfully"],
                rule_delete_multiple_success: "Rules deleted successfully",
                rule_delete_multiple_failed: "Failed to delete rules",
                rule_delete_failed: ["Failed to delete rule <strong>", "</strong>. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>"],
                test_rule_copy_error: "Unable to upload. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                test_rule_bundle_upload_name_error: "Invalid bundle name. Bundle name should not have space.",
                test_rule_insert_error: "Unable to upload. Please try after some time.",
                test_rule_upload_log_success: "Log uploaded successfully. Please close this window and wait for it to get parsed.",
                test_rule_success: "The selected rule(s) were tested successfully",
                test_rule_failed: "Unable to fetch Test Results. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                add_rule_success: ['Rule added successfully as draft. ID is <strong>', '</strong>'],
                add_us_rule_success: 'Rule added successfully as draft.',
                edit_rule_enabled_success: ['<strong>', '</strong> updated successfully'],
                edit_rule_draft_success: ['<strong>', '</strong> updated successfully as draft'],
                add_rule_fail: "Unable to save rule. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                add_template_success: 'Template saved successfully',
                add_template_fail: "Unable to save template. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                add_rule_field_empty: " should not be empty",
                add_rule_justification_invalid_json: " Invalid JSON or multiple JSONs are not allowed",
                add_rule_duplicate_label: "Duplicate label not allowed",
                add_rule_field_unselected: "Please select a ",
                add_rule_select_recommendation_text: "Please select some text in the recommendation field",
                add_rule_multiple_tables: "Please select either File or Bundle as a scope for multiple tables",
                add_rule_multiple_tables_unsupported: "Multiple sections not supported for Label, Justification, Recommendation, Logic and Text if <b>Scope</b> is set to Row",
		save_rule_enable_to_draft: "Previous rule will be disabled and current rule will be enabled only when you test the edited rule. Do you wish to go ahead with this change ?",
                add_rule_navigate: "Any unsaved data entered will be lost",
                edit_rule_disabled: "Please enable the rule before editing.",
                uns_add_rule_table_not_matching: "Please enter correct table name",
                uns_add_rule_duplicate_table: "Please remove duplicate table name",
                upload_log_time_exceeded: "Processing Failed. Please try again or contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                parse_log_time_exceeded: "File upload process taking more time than expected. Please use Show Test History link in Rules List page to view the result",
                owner_change_multiple: 'Are you sure you want to change the ownership of the following rules:<br><span class="gb-sub">You can change ownership of the rules which are owned by you.</span>',
                owner_change_multiple_warn: 'You can only change ownership of the rules which are owned by you',
                emptyRuleHistoryAlertMsg: 'No Change history for this rule',
                invalidHttpUrl: "Invalid Http Url",
                invalidJson: "Invalid Json",
                duplicateTemplateName: "Template name already exists",
                admin_config_temp_associated: ['Cannot delete <b>', '</b> as it is associated with an API template. You must remove all associations of <b>','</b> with API template/s before deleting.'],
                API_temp_del_rule_associated: 'Cannot delete API template as it is associated with a rules. Please remove all associations of the API template with a rule before deleting',
                map_temp_multiple_Del_none : "You cannot delete the selected templates as they are associated with rule/s",
                admin_config_temp_delete_fail : "Unable to delete the template, Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>",
                baseTemplateEmpty: "Please Select a Base Template",
                admin_config_temp_del_single : ['Are you sure you want to delete base template ', '?'],
            };

            // Warning to be shown before submitting rule in case of multiple sections
            globalObj.rule_multiple_section = "If a section has multiple rows then only the last value will be used."

            // Alert messages to be shown if any error occurs in rule logic
            globalObj.rulesLogicAlerts = {
                rule_logic_no_condition: 'The rule does not have a condition. Please add a condition for the rule',
                rule_logic_aggregate_condition: 'Only conditional operators can be used for aggregate functions (SUM , MIN , MAX , AVG).',
                rule_logic_nexted_aggregate_function: 'Nested Aggregate functions(MIN, MAX, SUM, AVG, COUNT) not allowed.',
                rule_logic_division_zero: 'Division by zero is not supported',
                rule_logic_not_numeric_attr: 'You are trying an operation that can be performed on an integer, not on a non-integer attribute. {###} is not an integer attribute',
                rule_logic_aggregate_not_numeric_attr: 'Aggregate functions(MIN, MAX, SUM and AVG) can be performed on an integer, not on a non-integer attribute. {###} is not an integer attribute',
                rule_logic_invalid_aggregate_function: "Aggregate functions(MIN, MAX, SUM and AVG) should have valid attribute name. It should not have nested functions. {###} is not a valid aggregate function",
                rule_logic_version_function_param_not_string: 'Version function should have version attribute. {###} is not a version attribute',
                rule_logic_not_string_attr: 'You are trying an operation that can be performed on a string, not on a non-string attribute. {###} is not a string attribute',
                rule_logic_not_number: 'You are trying an operation that can be performed on an integer, not on a non-integer value. ### is not an integer value',
                rule_logic_not_string: 'You are trying an operation that can be performed on a string, not on a non-string value. ### is not a string value',
                rule_logic_not_version_string: 'VERSION function can be compared only with integer value. Value should be in following format  \'%d.d.d%\'.',
                rule_logic_right_value_required: 'Rule logic is incomplete. A value or attribute is required on the right hand side of ### operator',
                rule_logic_right_pattern_required: 'When you use ### operator, you need to use a pattern string in the form of \'%<string>%\', \'<string>%\' or \'%<string>\'',
                rule_logic_left_attribute: 'Rule logic is incomplete. There should be an attribute on the left side of ### operator',
                rule_logic_string_operator: "### operator is supported only for string attributes",
                rule_logic_version_invalid_operation: "Invalid operation with VERSION function",
                rule_logic_numrals_exceeded: 'Only one number or decimal is allowed on either side of a comparison operator',
                rule_logic_cmp_operator_exceeded: 'More than one comparison operator found in a logic statement',
                rule_logic_invalid_operator_between: 'Only arithmetic and comparison operators allowed between two operands. ### is not an arithmetic or comparison operator',
                rule_logic_no_operator: 'No operator found between two operands',
                rule_logic_operator_without_spaces: 'Operators should have a space before and after them. ### is used without spaces',
                rule_logic_operator_space_needed: 'A blank space is required before and after an operator',
                rule_logic_invalid_operator: '### is not a valid operator',
                rule_logic_invalid_between_attr: '### is not allowed between two operands',
                rule_logic_operator_right: 'An arithmetic, comparison or relational operator required on the right hand side of the attribute',
                rule_logic_invalid_start: 'Logic should always start with an attribute. This rule’s logic is not starting with an attribute',
                rule_logic_logical_right: 'There should be an attribute on the right hand side of a logical operator',
                rule_logic_function_without_params: 'You have added a function without any parameters and that is not valid',
                rule_logic_function_without_attr: 'Function only accepts attributes parsed in Glassbeam and not regular strings. Please enter an attribute inside a function',
                rule_logic_no_typecasting: 'No need of typecasting for the attribute {###}',
                rule_logic_version_function_should_hv_version_attribute: 'Version function should have VERSION attribute',
                rule_logic_invalid_function: '### is not a supported function',
                rule_logic_repeated_attribute: "{###} is repeated in the logic statement",
                rule_logic_invalid_regex_len_attr: "{###} : flower braces are not allowed inside Regex() for logic",
                rule_logic_invalid_like_curly_brace: "{###} : Curly braces are not allowed within LIKE operator for logic",
                rule_logic_invalid_attr: '{###} is invalid attribute for logic. Only valid attributes can be used within curly braces. Pick valid attributes that have been parsed from the tree on the left side of the screen',
                rule_logic_error: 'There seems to be an error in logic for this rule. Check the logic part of this rule and fix the error',
                rule_logic_error_UpperCaseCountRegexName: 'Please use "upper case" for function name to complete your rule.',
                rule_logic_error_version_not_allowed_inside_count : "You can not use VERSION function inside COUNT.",
                rule_logic_invalid_regex_params: 'REGEX function should have following syntax:<br>REGEX({<b><i>section</i></b>.<b><i>attribute</i></b> }, "<b><i>regex_string</i></b> ")',
                rule_logic_invalid_regex_pattern: 'The regular expression <b>###</b> inside REGEX function is not valid',
                rule_logic_invalid_regex_attribute: '{###} is not a string attribute. Only string attributes can be used inside REGEX function',
                rule_logic_regex_no_capture: 'There should be one capture using () inside the regular expression <b>###</b>',
                rule_logic_regex_multiple_captures: 'More than one captures not allowed in regular expression <b>###</b>',
                rule_logic_regex_func_invalid: '### function is not allowed with REGEX function.',
                rule_logic_regex_assignment_operator: 'Invalid REGEX assignment operator.',
                rule_logic_regex_space_found: 'Blank space is not supported inside REGEX function. Use <b>\\s</b> instead.',
                rule_logic_multiple_sections_in_count: 'Please use different sections over different count functions between AND/OR',
                rule_logic_file_bundle_in_count: 'All the expressions in logic should be enclosed within <b>Aggregate</b> function(COUNT, MIN, MAX. SUM, AVG) for a File or Bundle rule scope.',
                rule_logic_count_in_table: '<b>COUNT</b> function is not supported for Table level rule',
                rule_logic_aggregations_in_table: '<b> SUM, MIN, MAX, AVG</b> function is not supported for Table level rule',
                rule_logic_wildCardCharacters: ['u'],
                rule_logic_file_scope_for_TIMEDIFF: '<b>TIMEDIFF</b> function supports only for FILE scope.',
                rule_logic_file_scope_for_TIMEDIFF_parameter_error: '<b>TIMEDIFF</b> function should have two parameters.<br>Both parameter should have REGEX function, like <b>TIMEDIFF(regex_1,regex_2)</b>',
                rule_logic_file_scope_for_TIMEDIFF_returned_value_should_compare_using_comparision_operator: '<b>TIMEDIFF</b> function\'s returned value should be compared with comparision operator.(>,>=,<,<=,<>,=)',
                rule_logic_file_scope_for_TIMEDIFF_returned_value_should_compare_wiht_number: '<b>TIMEDIFF</b> function\'s returned value should be compared with a number.',
            };

            // Map of status in C* vs Status Text
            globalObj.bundleStatus = {
                '0': 'Processing',
                '1': 'Parsing',
                '2': 'Success',
                '4': 'Failed',
                '5': 'Success'
            };

            // Flag to enable log processing threshold in R&A
            globalObj.log_processing_threshold_enabled = true;

            // Flag to enable log parsing threshold in R&A
            globalObj.log_parsing_threshold_enabled = false;

            // Tooltips for each field on Add/Edit Rule page
            globalObj.addRuleTooltips = {
                label: 'Label',
                description: 'Description',
                category: 'Category',
                author: 'Author',
                severity: 'Severity',
                priority: 'Priority',
                scope: 'Scope',
                action: 'Action',
                template: 'Email template',
                max_limit: 'Max Limit Alerts(Email)',
                max_alerts_display_ui: 'Max Limit Alerts(View)',
                kb_link: 'KB Link',
                recommendation: 'Recommendation',
                alert_justification: 'Justification',
                logic: 'Logic',
                text: 'Text'
            };

            // Fields to be displayed on Apps startup help modal
            globalObj.startupModalFields = [{
                title: 'Product Tours',
                description: 'Get a quick tour of Glassbeam Apps',
                faIcon: 'fa-film',
                redirectLink: globalObj.help_link_1,
                enabled: true
            }, {
                title: 'Glassbeam Help Manual',
                description: 'Understand features of Glassbeam Apps',
                faIcon: 'fa-search',
                redirectLink: globalObj.help_link_2,
                enabled: true
            }, {
                title: 'What\'s new',
                description: 'Understand the new features of Glassbeam Apps',
                faIcon: 'fa-lightbulb-o',
                redirectLink: globalObj.help_link_3,
                enabled: false
            }, {
                title: 'Glassbeam Studio Manual',
                description: 'Understand all the new features of Glassbeam Studio',
                faIcon: 'fa-medkit',
                redirectLink: globalObj.help_link_4,
                enabled: false
            }];

            // Section-column-type delimiter for R&A
            globalObj.rulesSecColDelimiter = "-";
            globalObj.defaultDashboard = 'summary';
            globalObj.dashboardAuthentication = "Dashboard authentication failed. Please contact <a href='mailto:" + adminEmail + "'>" + adminEmail + "</a>";
            globalObj.errorDashboardAuthentication = "Dashboard authentication failed";
            globalObj.dashboardErrorPage = "/apps/app/dashboard_error.html";
            globalObj.features = {};

        };

        // Tableau Viz versions for each Tableau version
        globalObj.tableauVizVersions = {
            "9": "2.0",
            "10": "2.1"
        }

        this.getRulesLogicAlerts = function (keyword) {
            var keyword = arguments[0];
            var msg = globalObj.rulesLogicAlerts[keyword];
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    msg = msg.replace(/###/, arguments[i]);
                }
            }
            if (msg.indexOf('###') != -1) {
                msg = globalObj.rulesLogicAlerts['rule_logic_error'];
            }
            return msg;
        };

        this.getVal = function (keyword) {
            var keyword = arguments[0];
            var msg = globalObj[keyword];
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    msg = msg.replace(/###/, arguments[i]);
                }
                return msg;
            } else {
                return msg;
            }
        };

        this.setVal = function (keyword, val) {
            globalObj[keyword] = val;
        };

        this.logError = function (errorMsg) {
            if (globalObj.debug) {
                console.error(errorMsg);
            }
        };

        this.setSessionCookies = function (token) {

            //get domain name from url
            var domain = $location.host().split(/\.(.+)?/)[1];
            //Retrive infoserver domain
            //if(info.infoserverDomain) {
            /*var infoD = info.infoserverDomain.split(":");
             var infoserverName = infoD[1];*/
            document.cookie = token + ";domain=" + domain + ";path=/";
            //}
        };
        this.gbAPI = [];
        this.addAPICall = function (url, config, canceler) {
            //add only API which have no extention
            var urlPart = url.split('?')[0];
            if (!urlPart) return;
            var filename = urlPart.split('/').pop();
            if (!filename) return;
            if (filename.lastIndexOf('.') != -1) return;
            var me = this;
            if (!me.gbAPI) {
                me.gbAPI = [];
            }
            me.gbAPI.push({
                'url': url,
                'timestamp': new Date(),
                'config': config,
                'canceler': canceler
            });
        };
        this.removeAPICall = function (url) {
            var me = this, tmp = [];
            var list = me.gbAPI;
            for (var i = 0; i < list.length; i++) {
                if (!list[i]) continue;
                if (!list[i].url) continue;
                if (list[i].url == url) {
                    list.splice(i, 1);
                    break;
                }
            }
        };
        this.getAPIDuration = function () {
            var me = this;
            if (!me.gbAPI || !me.gbAPI[0]) {
                if ($('#gb_page_takes_too_much_time').css('display') == 'block') {
                    $('#gb_page_takes_too_much_time').modal('hide');
                }
                return;
            };
            var now = new Date();
            var then = new Date(me.gbAPI[0].timestamp);
            if (me.gbAPI[0].lastTimestamp) {
                then = me.gbAPI[0].lastTimestamp;
            }
            var diffInMilliseconds = now - then;
            var diffInSeconds = diffInMilliseconds / 1000;
            if (diffInSeconds > globalObj.application_api_timeout) {
                if ($('#gb_page_takes_too_much_time').css('display') == 'none') {
                    $('#gb_page_takes_too_much_time').modal({ backdrop: 'static', keyboard: false });
                }
            }
        };
        this.APICallWait = function () {
            var me = this;
            var now = new Date();
            if (me.gbAPI[0].timestamp) {
                me.gbAPI[0].lastTimestamp = now;
            }
        }
        this.APICallCancel = function () {
            var me = this;
            var config = me.gbAPI[0].config;
            var canceler = me.gbAPI[0].canceler;
            if (canceler) {
                canceler.resolve('cancelled');
                if ($('#gb_page_takes_too_much_time').css('display') == 'block') {
                    $('#gb_page_takes_too_much_time').modal('hide');
                }
            }
            me.gbAPI.splice(0, me.gbAPI.length);
        }
        this.cancelAllAPIs = function(url){
            var me = this;
            for(var i=0;i<me.gbAPI.length;i++){
                if(me.gbAPI[i] && me.gbAPI[i].url && me.gbAPI[i].url.indexOf(url) != -1){
                    me.gbAPI[i].canceler.resolve('Cancelled!');
                }
            }
        }

        //R&A Analytics config
        globalObj.ruleAnalyticsConfig = {
            showMainDashboard :  true,
            showRuleDashboard : false,
            tiles : {
                status : true,
                priority : true,
                severity : true,
                creatorVsCategory : true,
                triggeredVsSeverity : true,
                severityVsTime : true,
                top10 : true,
                rulesTriggerInterval: true,
                category: true,
                owner: true
            }
        }
        globalObj.analyticsCustomTimeMsg = "last 30 days";

        globalObj.rulesAnalyticsHeadMapColorPattern = ["rgba(7, 128, 228, 0.1)", "rgba(7, 128, 228, 0.3)", "rgba(7, 128, 228, 0.5)", "rgba(7, 128, 228, 0.7)", "rgba(7, 128, 228, 0.9)", "rgba(7, 128, 228, 1)"];

        //Alert Charts anlytics dashboard Time and date config
        globalObj.alertTimeFilter = [
            {
                label: "Last 7 days",
                endTime: moment.utc().format(),
                startTime: moment().subtract(7,'day').utc().format(),
                selected : true
            },
            {
                label: "Last 15 days",
                endTime: moment.utc().format(),
                startTime: moment().subtract(15,'day').utc().format(),
                selected : false
            },
            {
                label: "Last 30 days",
                endTime: moment.utc().format(),
                startTime: moment().subtract(30,'day').utc().format(),
                selected : false
            },
            {
                label: "Custom filter",
                endTime: moment.utc().format(),
                startTime: moment.utc().format(),
                selected : false
            }
        ];
        globalObj.analyticsColor={
            status: ["#439cd4", "#57c9de",  "#39b54a"],
            priority: ["#439cd4","#57c9de","#39b54a","#80d160","#8950de","#d9abf9","#b4e481"],
            severity: ["#439cd4","#57c9de","#39b54a","#80d160","#8950de","#d9abf9","#b4e481"],
            AlertsTriggeredBySeverity: ["#439cd4","#57c9de", "#39b54a","#80d160","#b4e481","#8950de",  "#b379ee", "#d250de","#f55d01" ]
        };
          //For tableau dashboards export format is driven by ui 
          globalObj.tableauExportFormat = [
            {
                name: "pdf",
                enabled: true

            },
            {
                name: "csv",
                enabled: true

            }];
        globalObj.logiExportFormat = [
            {
                name: "pdf",
                enabled: false

            },
            {
                name: "csv",
                enabled: false

            },
            {
                name: "xls",
                enabled: false

            }
        ];

        globalObj.scheduleExportFileTypeDefault = "pdf";
	globalObj.intancecloseinterval = 4000;

        //Table headers congig for Multiple bundle upload from logvault
        globalObj.thMultipleBundleFromLogvault = [
         'Bundle Name', 'Uploaded Date', 'Bundle Size', 'Serial Number', 'Upload Status'
        ];

        globalObj.thresholdHours = 6;

        //object to display read only details of a rule
        //NOTE: The object is purposly writen in key value pairs as to maintain the sort order issue with ng-repeat
        globalObj.readOnlyHeaders = [
            {
                'key': 'label_display',
                'value' : 'Label'
            }, {
                'key': 'description',
                'value' : 'Description'
            },
            {
                'key': 'category',
                'value' : 'Category'
            },
            {
                'key': 'author',
                'value' : 'Author'
            },
            {
                'key': 'severity',
                'value' : 'Severity'
            },
            {
                'key': 'priority',
                'value' : 'Priority'
            },
            {
                'key': 'scope',
                'value' : 'Scope'
            },
            {
                'key': 'action',
                'value' : 'Action'
            },
            {
                'key': 'max_limit',
                'value' : 'Max Alerts(Email)'
            },
            {
                'key': 'max_alerts_display_ui',
                'value' : 'Max Alerts(View)'
            },
            {
                'key': 'kb_link',
                'value' : 'KB Link'
            },
            {
                'key': 'recommendation_display',
                'value' : 'Recommendation'
            },
            {
                'key': 'alert_justification_display',
                'value' : 'Justification'
            },
            {
                'key': 'logic_display',
                'value' : 'Logic'
            },
            {
                'key': 'text_display',
                'value' : 'Text'
            }
        ];

        //Alert Charts anlytics dashboard Time and date config
        globalObj.ruleListTimeFilter = [
            {
                label: "24hours",
                endTime: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                startTime: moment().subtract(24,'hours').utc().format('YYYY-MM-DD HH:mm:ss'),
                display : true
            },
            {
                label: "Last 7 days",
                endTime: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                startTime: moment().subtract(7,'day').utc().format('YYYY-MM-DD HH:mm:ss'),
                display : true
            },
            
            {
                label: "Last 30 days",
                endTime: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                startTime: moment().subtract(30,'day').utc().format('YYYY-MM-DD HH:mm:ss'),
                display : true
            },
            {
                label: "Last 3 months",
                endTime: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                startTime: moment().subtract(3,'month').utc().format('YYYY-MM-DD HH:mm:ss'),
                display : true
            },
            {
                label: "Last 6 months",
                endTime: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                startTime: moment().subtract(6,'months').utc().format('YYYY-MM-DD HH:mm:ss'),
                display : true
            },
            
        ];

    }]);