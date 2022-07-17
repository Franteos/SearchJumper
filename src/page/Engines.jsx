import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function saveConfigToScript (notification) {
    var saveMessage = new CustomEvent('saveConfig', {
        detail: {
            searchData: window.searchData, 
            notification: !!notification
        }
    });
    document.dispatchEvent(saveMessage);
}

function TypeEdit(props) {
    const [typeData, setTypeData] = React.useState(props.data);

    React.useEffect(() => {
        setTypeData(props.data);
    }, [props.data])

    function closeTypeEdit(update) {
        if (update) {
            if (!typeData.type) return props.handleAlertOpen(window.i18n('errorNoType'));
            for (let i = 0; i < window.searchData.sitesConfig.length; i++) {
                let type = window.searchData.sitesConfig[i];
                if (type.type === props.data.type) continue;
                if (type.type === typeData.type) {
                    return props.handleAlertOpen(window.i18n('errorSameType'));
                }
            }
            props.changeType(typeData);
        }
        props.closeHandler();
    }

    return (
        <Dialog open={props.typeOpen} onClose={() => {closeTypeEdit(false)}}>
            <DialogTitle>{window.i18n('editType')}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label={window.i18n('typeName')}
                    type="text"
                    fullWidth
                    variant="standard"
                    value={typeData.type}
                    onChange={e => {
                        setTypeData({ ...typeData, type:e.target.value });
                    }}
                />
                <TextField
                    margin="dense"
                    id="description"
                    label={window.i18n('description')}
                    type="text"
                    fullWidth
                    variant="standard"
                    value={typeData.description}
                    onChange={e => {
                        setTypeData({ ...typeData, description:e.target.value });
                    }}
                />
                <TextField
                    margin="dense"
                    id="icon"
                    label={window.i18n('typeIcon')}
                    type="text"
                    fullWidth
                    variant="standard"
                    value={typeData.icon}
                    onChange={e => {
                        setTypeData({ ...typeData, icon:e.target.value });
                    }}
                />
                <DialogContentText>
                    {window.i18n('iconTips')}
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="match"
                    label={window.i18n('typeMatch')}
                    type="text"
                    fullWidth
                    variant="standard"
                    value={typeData.match}
                    onChange={e => {
                        setTypeData({ ...typeData, match:e.target.value });
                    }}
                />
                <DialogContentText>
                    {window.i18n('typeMatchTips')}
                </DialogContentText>
                <Box style={{textAlign: "center", border: "1px solid rgba(0, 0, 0, 0.42)", borderRadius: "10px"}}>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.selectTxt} 
                                    name="enableSelTxt"
                                    onClick={e => {
                                        setTypeData({ ...typeData, selectTxt:e.target.checked });
                                    }}
                                />
                            }
                            label={window.i18n('typeEnableSelTxt')}
                            labelPlacement="top"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.selectImg} 
                                    name="enableSelImg"
                                    onClick={e => {
                                        setTypeData({ ...typeData, selectImg:e.target.checked });
                                    }}
                                />
                            }
                            label={window.i18n('typeEnableSelImg')}
                            labelPlacement="top"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.selectVideo} 
                                    name="enableSelVideo"
                                    onClick={e => {
                                        setTypeData({ ...typeData, selectVideo:e.target.checked });
                                    }}
                                />
                            }
                            label={window.i18n('typeEnableSelVideo')}
                            labelPlacement="top"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.selectAudio} 
                                    name="enableSelAudio"
                                    onClick={e => {
                                        setTypeData({ ...typeData, selectAudio:e.target.checked });
                                    }}
                                />
                            }
                            label={window.i18n('typeEnableSelAudio')}
                            labelPlacement="top"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.selectLink} 
                                    name="enableSelLink"
                                    onClick={e => {
                                        setTypeData({ ...typeData, selectLink:e.target.checked });
                                    }}
                                />
                            }
                            label={window.i18n('typeEnableSelLink')}
                            labelPlacement="top"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.selectPage} 
                                    name="enableSelPage"
                                    onClick={e => {
                                        setTypeData({ ...typeData, selectPage:e.target.checked });
                                    }}
                                />
                            }
                            label={window.i18n('typeEnableSelPage')}
                            labelPlacement="top"
                        />
                    </FormControl>
                </Box>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <FormControlLabel
                        control={
                            <Switch 
                                checked={typeData.openInNewTab} 
                                name="openInNewTab"
                                onClick={e => {
                                    setTypeData({ ...typeData, openInNewTab:e.target.checked });
                                }}
                            />
                        }
                        label={window.i18n('typeOpenInNewTab')}
                    />
                </FormControl>
                <Box sx={{flexGrow: 1, display: 'flex', flexWrap: 'nowrap'}}>
                    <TextField
                        margin="dense"
                        id="match"
                        label={window.i18n('typeShotcut')}
                        type="text"
                        variant="outlined"
                        value={typeData.shortcut}
                        inputProps={{ maxLength: 1 }}
                        onChange={e => {
                            setTypeData({...typeData, shortcut: e.target.value});
                        }}
                    />
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.ctrl} 
                                    name="ctrl"
                                    onClick={e => {
                                        setTypeData({...typeData, ctrl: e.target.checked});
                                    }}
                                />
                            }
                            label='Ctrl'
                            labelPlacement="bottom"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.alt} 
                                    name="alt"
                                    onClick={e => {
                                        setTypeData({...typeData, alt: e.target.checked});
                                    }}
                                />
                            }
                            label='Alt'
                            labelPlacement="bottom"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.shift} 
                                    name="shift"
                                    onClick={e => {
                                        setTypeData({...typeData, shift: e.target.checked});
                                    }}
                                />
                            }
                            label='Shift'
                            labelPlacement="bottom"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={typeData.meta} 
                                    name="meta"
                                    onClick={e => {
                                        setTypeData({...typeData, meta: e.target.checked});
                                    }}
                                />
                            }
                            label='Meta'
                            labelPlacement="bottom"
                        />
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={props.handleDeleteType}>{window.i18n('delete')}</Button>
                <Button onClick={() => { closeTypeEdit(false) }}>{window.i18n('cancel')}</Button>
                <Button onClick={() => { closeTypeEdit(true) }}>{window.i18n('edit')}</Button>
            </DialogActions>
        </Dialog>
    );
}

class ChildSiteIcons extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.sites !== this.props.sites || nextProps.checkeds.length !== this.checkeds.length || !nextProps.checkeds.every((value, index) => value === this.checkeds[index]);
    }

    render() {
        this.checkeds = [...this.props.checkeds];
        return (
            <Box sx={{flexGrow: 1, display: 'flex', flexWrap: 'wrap'}}>
                {this.props.sites.map((site, i) => (
                    <Box className="site-icon" key={i}>
                        <Checkbox
                            onChange={e => {
                                this.props.checkChange(e, i);
                            }}
                            checked={this.props.checkeds[i]}
                        />
                        <IconButton sx={{fontSize: '1rem', flexDirection: 'column'}} draggable='true' onDrop={e => {this.props.changeSitePos(site, this.dragSite)}} onDragStart={e => {this.dragSite = site}} onDragOver={e => {e.preventDefault()}} key={site.name} title={site.name}  onClick={() => { this.props.openSiteEdit(site) }}>
                            <Avatar sx={{m:1}} alt={site.name} src={(!this.props.tooLong && (site.icon || (/^http/.test(site.url) && site.url.replace(new RegExp('(https?://[^/]*/).*$'), "$1favicon.ico")))) || ''} />{site.name.length > 10 ? site.name.slice(0, 10) : site.name}
                        </IconButton>
                    </Box>
                ))}
                <IconButton color="primary" key='addType' onClick={() => { this.props.openSiteEdit(false); }}>
                    <AddCircleOutlineIcon sx={{fontSize: '50px'}} />
                </IconButton>
            </Box>
        );
    }
}
// function ChildSiteIcon({sites, changeSitePos, tooLong, checkChange, checked, openSiteEdit}) {
//     console.log("sitesIconRender");
//     return (
//         <Box sx={{flexGrow: 1, display: 'flex', flexWrap: 'wrap'}}>
//             {sites.map((site, i) => (
//                 <Box className="site-icon" key={i}>
//                     <Checkbox
//                         onChange={e => checkChange(e, i)}
//                         checked={checked[i]}
//                     />
//                     <IconButton sx={{fontSize: '1rem', flexDirection: 'column'}} draggable='true' onDrop={e => {changeSitePos(site, this.dragSite)}} onDragStart={e => {this.dragSite = site}} onDragOver={e => {e.preventDefault()}} key={site.name} title={site.name}  onClick={() => { openSiteEdit(site) }}>
//                         {tooLong ? '' : <Avatar sx={{m:1}} alt={site.name} src={(!tooLong && (site.icon || (/^http/.test(site.url) && site.url.replace(new RegExp('(https?://[^/]*/).*$'), "$1favicon.ico"))))||''} />}{site.name.length > 10 ? site.name.slice(0, 10) : site.name}
//                     </IconButton>
//                 </Box>
//             ))}
//             <IconButton color="primary" key='addType' onClick={() => { openSiteEdit(false); }}>
//                 <AddCircleOutlineIcon sx={{fontSize: '50px'}} />
//             </IconButton>
//         </Box>
//     );
// }

// const MemoSiteIcon = React.memo(ChildSiteIcon);

class SitesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data, isOpenSiteEdit: false, currentSite: siteObject(false), checkeds: Array(props.data.sites.length).fill(false), cloneSite: false};

        this.editSite = null;
        this.openTypeEdit = props.openTypeEdit;
        this.index = props.index;
        this.handleAlertOpen = props.handleAlertOpen;

        this.openSiteEdit = this.openSiteEdit.bind(this);
        this.closeSiteEdit = this.closeSiteEdit.bind(this);
        this.handleDeleteSite = this.handleDeleteSite.bind(this);
        this.changeSitePos = this.changeSitePos.bind(this);
        this.tooLong = props.data.sites && props.data.sites.length > 50;
        this.batchSelect = false;
    }

    getMinSiteData(siteData) {
        let obj = {};
        if (siteData.name) {
            obj.name = siteData.name;
        }
        if (siteData.url) {
            obj.url = siteData.url;
        }
        if (siteData.icon) {
            obj.icon = siteData.icon;
        }
        if (siteData.keywords) {
            obj.keywords = siteData.keywords;
        }
        if (siteData.description) {
            obj.description = siteData.description;
        }
        if (siteData.match) {
            obj.match = siteData.match;
        }
        if (siteData.charset) {
            obj.charset = siteData.charset;
        }
        if (siteData.shortcut) {
            obj.shortcut = siteData.shortcut;
        }
        if (siteData.ctrl) {
            obj.ctrl = siteData.ctrl;
        }
        if (siteData.alt) {
            obj.alt = siteData.alt;
        }
        if (siteData.shift) {
            obj.shift = siteData.shift;
        }
        if (siteData.meta) {
            obj.meta = siteData.meta;
        }
        if (siteData.nobatch) {
            obj.nobatch = siteData.nobatch;
        }
        if (siteData.hideNotMatch) {
            obj.hideNotMatch = siteData.hideNotMatch;
        }
        return obj;
    }

    openSiteEdit(data) {
        this.editSite = data;
        let currentSite = siteObject(data);
        this.setState(prevState => ({
            isOpenSiteEdit: true,
            currentSite: currentSite
        }));
    }

    closeSiteEdit(update) {
        if (update) {
            if (!this.state.currentSite.name) return this.handleAlertOpen(window.i18n('needName'));
            if (!this.state.currentSite.url) return this.handleAlertOpen(window.i18n('needUrl'));
            for (let i = 0; i < window.searchData.sitesConfig.length; i++) {
                let typeData = window.searchData.sitesConfig[i];
                let sites = typeData.sites;
                for (let j = 0; j < sites.length; j++) {
                    let site = sites[j];
                    if (site.url === this.editSite.url) continue;
                    if (site.url === this.state.currentSite.url) {
                        return this.handleAlertOpen(window.i18n('sameSiteUrl'));
                    }
                    if (this.state.currentSite.shortcut) {
                        if (site.shortcut === this.state.currentSite.shortcut) {
                            return this.handleAlertOpen(window.i18n('sameShortcut', site.name));
                        }
                    }
                    if (!/^\[/.test(site.url) && site.name === this.state.currentSite.name) {
                        return this.handleAlertOpen(window.i18n('sameSiteName', typeData.type));
                    }
                }
            }
            if (this.editSite) {
                let newSites = this.state.data.sites.map(site => {
                    if (site.url === this.editSite.url) {
                        return this.getMinSiteData(this.state.currentSite);
                    }
                    return site;
                })
                let newType = {...this.state.data, sites: newSites};
                let changeName = this.editSite.name !== this.state.currentSite.name;
                window.searchData.sitesConfig = window.searchData.sitesConfig.map(data =>{
                    let returnData = data;
                    if (this.state.data.type === data.type) {
                        returnData = {...data, sites: newSites};
                    }
                    if (changeName) {
                        returnData.sites = returnData.sites.map(site => {
                            if (/^\[/.test(site.url)) {
                                site.url = site.url.replaceAll('"' + this.editSite.name + '"', '"' + this.state.currentSite.name + '"');
                            }
                            return site;
                        });
                    }
                    return returnData;
                });
                this.setState(prevState => ({
                    data: newType
                }));
            } else {
                let newSites = this.state.data.sites.concat([this.getMinSiteData(this.state.currentSite)])
                let newType = {...this.state.data, sites: newSites};
                window.searchData.sitesConfig = window.searchData.sitesConfig.map(data =>{
                    if (this.state.data.type === data.type) {
                        return newType;
                    }
                    return data;
                });
                this.setState(prevState => ({
                    data: newType
                }));
            }
            saveConfigToScript();
        }
        this.setState(prevState => ({
            isOpenSiteEdit: false
        }));
    }

    handleDeleteSite() {
        this.setState(prevState => ({
            isOpenSiteEdit: false
        }));
        let newSites = this.state.data.sites.filter(site => {
            return (site.url !== this.editSite.url);
        });
        let newType = {...this.state.data, sites: newSites};
        window.searchData.sitesConfig = window.searchData.sitesConfig.map(data =>{
            let returnData = data;
            if (this.state.data.type === data.type) {
                returnData = newType;
            }
            returnData.sites = returnData.sites.map(site => {
                if (/^\[/.test(site.url)) {
                    let namesArr = JSON.parse(site.url);
                    namesArr = namesArr.filter(n => {
                        return (n !== this.editSite.name);
                    });
                    site.url = namesArr.length === 0 ? '' : JSON.stringify(namesArr);
                }
                return site;
            });
            returnData.sites = returnData.sites.filter(site => {
                return site.url !== '';
            });
            return returnData;
        });
        this.setState(prevState => ({
            data: newType
        }));
        saveConfigToScript();
    }

    changeSitePos(targetSite, dragSite) {
        if (targetSite.url === dragSite.url)return;
        let newSites = this.state.data.sites.filter(site => {
            return (site.url !== dragSite.url);
        })
        for (let i in newSites) {
            if (newSites[i].url === targetSite.url) {
                newSites.splice(i, 0, dragSite);
                break;
            }
        }
        let newType = {...this.state.data, sites: newSites};
        window.searchData.sitesConfig = window.searchData.sitesConfig.map(data =>{
            if (this.state.data.type === data.type) {
                return newType;
            }
            return data;
        });
        this.setState(prevState => ({
            data: newType
        }));
        saveConfigToScript();
    }

    render() {
        return (
            <Box elevation={5} component={Paper} sx={{p: '20px', mt: 2}} className='site-list-box'>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', minHeight: 50, flexWrap: 'wrap' }}>
                    <IconButton title={window.i18n('editType')} color="primary" key='editType' onClick={() => { this.openTypeEdit(this.index) }}>
                        <EditIcon />
                    </IconButton>
                    <IconButton title={window.i18n('batchAction')} color="primary" key='mulSelType' onClick={() => { 
                        this.batchSelect = !this.batchSelect; 
                        let siteListBox = document.querySelector(".site-list-box");
                        if (this.batchSelect) {
                            siteListBox.classList.add("batch-edit");
                        } else {
                            siteListBox.classList.remove("batch-edit");
                        }
                    }}>
                        <SelectAllIcon />
                    </IconButton>
                    <Button onClick={() => { 
                        this.setState(prevState => ({ 
                            checkeds: Array(this.state.data.sites.length).fill(false)
                        }));
                    }}>{window.i18n('cancel')}</Button>
                    <Button onClick={() => { 
                        this.setState(prevState => ({ 
                            checkeds: Array(this.state.data.sites.length).fill(true)
                        }));
                    }}>{window.i18n('selectAll')}</Button>
                    <Button onClick={() => { 
                        this.setState(prevState => ({ 
                            checkeds: prevState.checkeds.map(v => !v)
                        }));
                    }}>{window.i18n('invert')}</Button>
                    <Button variant="outlined" color="error" sx={{ml: 'auto', height: 35}} startIcon={<DeleteIcon />} onClick={() => {
                        let newSites = this.state.data.sites.filter((site, i) => {
                            return (this.state.checkeds[i] !== true);
                        })
                        if (newSites.length === this.state.data.sites.length || !window.confirm(window.i18n('deleteConfirm'))) return;
                        let newType = {...this.state.data, sites: newSites};
                        window.searchData.sitesConfig = window.searchData.sitesConfig.map(data =>{
                            if (this.state.data.type === data.type) {
                                return newType;
                            }
                            return data;
                        });
                        this.setState(prevState => ({
                            data: newType,
                            isOpenSiteEdit: false,
                            checkeds: Array(newSites.length).fill(false)
                        }));
                        saveConfigToScript();
                    }}>{window.i18n('delete')}</Button>
                    <FormControl sx={{ ml: 1, mr: 0 }}>
                        <InputLabel>{window.i18n('moveTo')}</InputLabel>
                        <Select
                            value={0}
                            name="x"
                            sx={{height: 35}}
                            onChange={(event: SelectChangeEvent) => {
                                let moveSites = this.state.data.sites.filter((site, i) => {
                                    return (this.state.checkeds[i] === true);
                                })
                                if (moveSites.length === 0) return;
                                if (this.state.cloneSite) {
                                    if (!window.confirm(window.i18n('cloneConfirm', event.target.value))) return;
                                    let cloneToGroup = moveSites.length !== 1 && window.confirm(window.i18n('cloneAction'));
                                    let cloneSites;
                                    if (cloneToGroup) {
                                        let groupName = window.prompt(window.i18n('groupName'));
                                        let groupUrlArr = [];
                                        moveSites.forEach(site => {
                                            if (!/^\[/.test(site.url)) {
                                                groupUrlArr.push(site.name);
                                            }
                                        });
                                        cloneSites = [{name: groupName, url:JSON.stringify(groupUrlArr)}];
                                    } else {
                                        cloneSites = [];
                                        moveSites.forEach(site => {
                                            if (!/^\[/.test(site.url)) {
                                                cloneSites.push({name: site.name, url: JSON.stringify([site.name])});
                                            }
                                        });
                                    }
                                    window.searchData.sitesConfig = window.searchData.sitesConfig.map(data =>{
                                        if (event.target.value === data.type) {
                                            cloneSites.forEach(cloneSite => {
                                                let findIndex = data.sites.findIndex(site => {return site.url === cloneSite.url});
                                                if (findIndex === -1) data.sites.push(cloneSite);
                                            });
                                        }
                                        return data;
                                    });
                                    this.setState(prevState => ({
                                        isOpenSiteEdit: false,
                                        checkeds: Array(prevState.checkeds.length).fill(false)
                                    }));
                                } else {
                                    if (event.target.value === this.state.data.type) return;
                                    if (!window.confirm(window.i18n('moveToConfirm', event.target.value))) return;
                                    let newSites = this.state.data.sites.filter((site, i) => {
                                        return (this.state.checkeds[i] !== true);
                                    })
                                    let newType = {...this.state.data, sites: newSites};
                                    window.searchData.sitesConfig = window.searchData.sitesConfig.map(data =>{
                                        if (this.state.data.type === data.type) {
                                            return newType;
                                        } else if (event.target.value === data.type) {
                                            data.sites = data.sites.concat(moveSites);
                                        }
                                        return data;
                                    });
                                    this.setState(prevState => ({
                                        data: newType,
                                        isOpenSiteEdit: false,
                                        checkeds: Array(newSites.length).fill(false)
                                    }));
                                }
                                saveConfigToScript();
                            }}
                            autoWidth
                            label={window.i18n('moveTo')}
                        >
                        <MenuItem value={0}>
                            {window.i18n('category')}
                        </MenuItem>
                        {window.searchData.sitesConfig.map((data, index) =>
                            <MenuItem key={data.type} value={data.type}>
                                {data.type}
                            </MenuItem>
                        )}
                        </Select>
                    </FormControl>
                    <FormControlLabel sx={{ ml: 0 }} control={
                        <Checkbox 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                this.setState(prevState => ({
                                    cloneSite: event.target.checked
                                }))
                            }}
                            checked={this.state.cloneSite} 
                        />
                    } label={window.i18n('clone')} />
                </Box>

                <ChildSiteIcons 
                    sites={this.state.data.sites} 
                    checkChange={(event: React.ChangeEvent<HTMLInputElement>, i) => {
                        let value = event.target.checked;
                        this.setState(prevState => {
                            let newCheckeds = prevState.checkeds;
                            newCheckeds[i] = value;
                            return {
                                checkeds: newCheckeds
                            }
                        })
                    }}
                    tooLong={this.tooLong}
                    changeSitePos={this.changeSitePos}
                    checkeds={this.state.checkeds}
                    openSiteEdit={this.openSiteEdit}
                />
                <Dialog open={this.state.isOpenSiteEdit} onClose={() => this.closeSiteEdit(false)}>
                    <DialogTitle>{window.i18n('editSite')}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label={window.i18n('siteName')}
                            type="text"
                            fullWidth
                            variant="standard"
                            value={this.state.currentSite.name}
                            onChange={e => {
                                this.setState(prevState => ({
                                    currentSite: {...this.state.currentSite, name: e.target.value}
                                }));
                            }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label={window.i18n('description')}
                            type="text"
                            fullWidth
                            variant="standard"
                            value={this.state.currentSite.description}
                            onChange={e => {
                                this.setState(prevState => ({
                                    currentSite: {...this.state.currentSite, description: e.target.value}
                                }));
                            }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="url"
                            label={window.i18n('siteUrl')}
                            type="text"
                            fullWidth
                            variant="standard"
                            value={this.state.currentSite.url}
                            onChange={e => {
                                this.setState(prevState => ({
                                    currentSite: {...this.state.currentSite, url: e.target.value}
                                }));
                            }}
                            placeholder="https://www.google.com/search?q=%s"
                        />
                        <DialogContentText>
                            {window.i18n('siteUrlTips')}
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="icon"
                            label={window.i18n('siteIcon')}
                            type="text"
                            fullWidth
                            variant="standard"
                            value={this.state.currentSite.icon}
                            onChange={e => {
                                this.setState(prevState => ({
                                    currentSite: {...this.state.currentSite, icon: e.target.value}
                                }));
                            }}
                        />
                        <TextField
                            margin="dense"
                            id="keywords"
                            label={window.i18n('siteKeywords')}
                            type="text"
                            fullWidth
                            variant="standard"
                            value={this.state.currentSite.keywords}
                            onChange={e => {
                                this.setState(prevState => ({
                                    currentSite: {...this.state.currentSite, keywords: e.target.value}
                                }));
                            }}
                        />
                        <TextField
                            margin="dense"
                            id="match"
                            label={window.i18n('siteMatch')}
                            type="text"
                            fullWidth
                            variant="standard"
                            value={this.state.currentSite.match}
                            onChange={e => {
                                this.setState(prevState => ({
                                    currentSite: {...this.state.currentSite, match: e.target.value}
                                }));
                            }}
                        />
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <FormControlLabel
                                control={
                                    <Switch 
                                        checked={this.state.currentSite.hideNotMatch} 
                                        name="hideNotMatch"
                                        onClick={e => {
                                            this.setState(prevState => ({
                                                currentSite: {...prevState.currentSite, hideNotMatch: e.target.checked}
                                            }));
                                        }}
                                    />
                                }
                                label={window.i18n('hideNotMatch')}
                            />
                        </FormControl>
                        <Box sx={{flexGrow: 1, display: 'flex', flexWrap: 'nowrap'}}>
                            <TextField
                                margin="dense"
                                id="match"
                                label={window.i18n('siteShotcut')}
                                type="text"
                                variant="outlined"
                                value={this.state.currentSite.shortcut}
                                inputProps={{ maxLength: 1 }}
                                onChange={e => {
                                    this.setState(prevState => ({
                                        currentSite: {...this.state.currentSite, shortcut: e.target.value}
                                    }));
                                }}
                            />
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <FormControlLabel
                                    control={
                                        <Switch 
                                            checked={this.state.currentSite.ctrl} 
                                            name="ctrl"
                                            onClick={e => {
                                                this.setState(prevState => ({
                                                    currentSite: {...prevState.currentSite, ctrl: e.target.checked}
                                                }));
                                            }}
                                        />
                                    }
                                    label='Ctrl'
                                    labelPlacement="bottom"
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <FormControlLabel
                                    control={
                                        <Switch 
                                            checked={this.state.currentSite.alt} 
                                            name="alt"
                                            onClick={e => {
                                                this.setState(prevState => ({
                                                    currentSite: {...prevState.currentSite, alt: e.target.checked}
                                                }));
                                            }}
                                        />
                                    }
                                    label='Alt'
                                    labelPlacement="bottom"
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <FormControlLabel
                                    control={
                                        <Switch 
                                            checked={this.state.currentSite.shift} 
                                            name="shift"
                                            onClick={e => {
                                                this.setState(prevState => ({
                                                    currentSite: {...prevState.currentSite, shift: e.target.checked}
                                                }));
                                            }}
                                        />
                                    }
                                    label='Shift'
                                    labelPlacement="bottom"
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <FormControlLabel
                                    control={
                                        <Switch 
                                            checked={this.state.currentSite.meta} 
                                            name="meta"
                                            onClick={e => {
                                                this.setState(prevState => ({
                                                    currentSite: {...prevState.currentSite, meta: e.target.checked}
                                                }));
                                            }}
                                        />
                                    }
                                    label='Meta'
                                    labelPlacement="bottom"
                                />
                            </FormControl>
                        </Box>
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <FormControlLabel
                                control={
                                    <Switch 
                                        checked={this.state.currentSite.nobatch} 
                                        name="nobatch"
                                        onClick={e => {
                                            this.setState(prevState => ({
                                                currentSite: {...prevState.currentSite, nobatch: e.target.checked}
                                            }));
                                        }}
                                    />
                                }
                                label={window.i18n('nobatch')}
                            />
                        </FormControl>
                        <Autocomplete
                            disablePortal
                            margin="dense"
                            // sx={{ mt: 5 }}
                            id="charset"
                            fullWidth
                            variant="standard"
                            options={allCharset}
                            value={this.state.currentSite.charset}
                            onChange={e => {
                                this.setState(prevState => ({
                                    currentSite: {...this.state.currentSite, charset: e.target.textContent}
                                }));
                            }}
                            renderInput={(params) => <TextField 
                                {...params}
                                label={window.i18n('siteCharset')} 
                            />}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" style={{display:this.editSite?'':'none'}} color="error" startIcon={<DeleteIcon />} onClick={this.handleDeleteSite}>{window.i18n('delete')}</Button>
                        <Button onClick={() => this.closeSiteEdit(false)}>{window.i18n('cancel')}</Button>
                        <Button onClick={() => this.closeSiteEdit(true)}>{window.i18n('edit')}</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        );
    }
}

const allCharset = [
  "","gbk","gb18030","big5","big5-hkscs","utf-8","utf-16le","shift-jis","euc-jp","iso-2022-jp","euc-kr","iso-2022-kr","macintosh","koi8-r","koi8-u",
    "windows-1250","windows-1251","windows-1252","windows-1253","windows-1254","windows-1255","windows-1256","windows-1257","windows-1258",
    "iso-8859-1","iso-8859-2","iso-8859-3","iso-8859-4","iso-8859-5","iso-8859-6","iso-8859-7","iso-8859-8","iso-8859-8-i","iso-8859-9","iso-8859-10","iso-8859-11","iso-8859-13","iso-8859-14","iso-8859-15","iso-8859-16"
];

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function typeObject(obj) {
    obj = obj || {};
    return {
        type: obj.type || '',
        icon: obj.icon || '',
        match: obj.match || '',
        description: obj.description || '',
        selectTxt: obj.selectTxt || false,
        selectImg: obj.selectImg || false,
        selectAudio: obj.selectAudio || false,
        selectVideo: obj.selectVideo || false,
        selectLink: obj.selectLink || false,
        selectPage: obj.selectPage || false,
        openInNewTab: obj.openInNewTab || false,
        shortcut: obj.shortcut || '',
        ctrl: obj.ctrl || false,
        alt: obj.alt || false,
        shift: obj.shift || false,
        meta: obj.meta || false,
    };
}

function siteObject(obj) {
    obj = obj || {};
    return {
        name: obj.name || '',
        url: obj.url || '',
        icon: obj.icon || '',
        keywords: obj.keywords || '',
        description: obj.description || '',
        match: obj.match || '',
        charset: obj.charset || '',
        shortcut: obj.shortcut || '',
        ctrl: obj.ctrl || false,
        alt: obj.alt || false,
        shift: obj.shift || false,
        meta: obj.meta || false,
        nobatch: obj.nobatch || false,
        hideNotMatch: obj.hideNotMatch || false
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{width: '100%'}}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function createData(
  param: string,
  infoEn: string,
  infoCn: string
) {
  return { param, infoEn, infoCn };
}

const rows = [
  createData('%s', 'search keyword', '搜索關鍵詞'),
  createData('%S', 'cached search keyword', '最近一次的搜索關鍵詞'),
  createData('%sl', 'search keyword with lower case letters', '小寫字母搜索詞'),
  createData('%su', 'search keyword with upper case letters', '大寫字母搜索詞'),
  createData('%sr', 'search keyword without doing any encoding', '未轉碼的搜索關鍵詞'),
  createData('%s.replace', 'replace keywords with regexp, like %sr.replace(/[^\\d]/g, "").replace(/(\\d)/g, "$1 ") means replace raw keywords to numbers and then join all numbers with space', '用正則替換搜索關鍵詞，例如 %sr.replace(/[^\\d]/g, "").replace(/(\\d)/g, "$1 ") 代表提取原始關鍵詞中所有數字，並以空格分隔'),
  createData('%e', 'charset', '當前頁面編碼'),
  createData('%c', 'client: pc,mobile', '客戶端: pc,mobile'),
  createData('%u', 'current website url', '當前網站 url'),
  createData('%U', 'url with encodeURIComponent', '當前網站 url 的 URI 編碼'),
  createData('%h', 'current website host', '當前網站 host'),
  createData('%t', 'target src', '指向對象的 src'),
  createData('%T', '%t with encodeURIComponent', '指向對象的 src 的 URI 編碼'),
  createData('%b', 'target src without http', '指向對象 src 去 http頭'),
  createData('%B', '%b with encodeURIComponent', '指向對象 src 去 http頭 的 URI 編碼'),
  createData('%i', 'base64 of target image', '指向圖片的 base64'),
  createData('%p{params}', 'post body, like %p{x=1&y=%s}', 'post 參數體，例如 %p{x=1&y=%s}'),
  createData('%P{params}', 'post without navigation', 'post 但不跳轉'),
  createData('%input{tips}', 'input something, like %input{love who?,you}', '輸入占位，例如%input{請輸入您的三圍,90 55 90}'),
  createData('#p{params}', 'post in page, like #p{#input=1&div.param=2}, use \\& \\= instead of & = in content', '頁内 post，可在頁面之内使用【css選擇器】填寫參數提交查詢，適用於不開放GET/POST接口（Ajax-render）的網站，例如 #p{#input=1&div.param=2}, 可在内容中使用 \\& \\= 來 表示 & ='),
  createData('["siteName1","siteName2"]', 'batch open by site name you\'ve created', '透過你已經創建的站點名批量打開，例如 ["雅虎搜索","谷歌搜索"]'),
  createData('c:', 'put this at first then all words after will be copied to the clipboard', '在開頭使用"c:"可以複製之後的所有字串')
];

export default function Engines() {
    const [value, setValue] = React.useState(0);

    const [editTypeOpen, setTypeOpen] = React.useState(false);
    const [editTypeData, setTypeData] = React.useState(typeObject(false));

    const [alertBody, setAlert] = React.useState({openAlert: false, alertContent: '', alertType: 'error'});

    const [refresh, setRefresh] = React.useState(false);
     
    React.useEffect(() => {
        refresh && setTimeout(() => setRefresh(false))
    }, [refresh]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const openTypeEdit = editType => {
        if (editType !== false) {
            editType = window.searchData.sitesConfig[editType];
        }
        setTypeData(typeObject(editType));
        setTypeOpen(true);
    };

    const getMinTypeData = (typeData) => {
        let minType = {};
        if (typeData.type) {
            minType.type = typeData.type;
        }
        if (typeData.icon) {
            minType.icon = typeData.icon;
        }
        if (typeData.match) {
            minType.match = typeData.match;
        }
        if (typeData.description) {
            minType.description = typeData.description;
        }
        if (typeData.selectTxt) {
            minType.selectTxt = typeData.selectTxt;
        }
        if (typeData.selectImg) {
            minType.selectImg = typeData.selectImg;
        }
        if (typeData.selectAudio) {
            minType.selectAudio = typeData.selectAudio;
        }
        if (typeData.selectVideo) {
            minType.selectVideo = typeData.selectVideo;
        }
        if (typeData.selectLink) {
            minType.selectLink = typeData.selectLink;
        }
        if (typeData.selectPage) {
            minType.selectPage = typeData.selectPage;
        }
        if (typeData.openInNewTab) {
            minType.openInNewTab = typeData.openInNewTab;
        }
        if (typeData.shortcut) {
            minType.shortcut = typeData.shortcut;
        }
        if (typeData.ctrl) {
            minType.ctrl = typeData.ctrl;
        }
        if (typeData.alt) {
            minType.alt = typeData.alt;
        }
        if (typeData.shift) {
            minType.shift = typeData.shift;
        }
        if (typeData.meta) {
            minType.meta = typeData.meta;
        }
        minType.sites = typeData.sites;
        return minType;
    };

    const changeType = (newType) => {
        let newData;
        if (editTypeData.type === '') {
            if (!newType || newType.type === '') return;
            newData = window.searchData.sitesConfig.concat([{...getMinTypeData(newType), sites: []}])
        } else {
            if (newType === false) {
                newData = window.searchData.sitesConfig.filter(data =>{
                    return (editTypeData.type !== data.type)
                });
                let newValue = value - 1;
                if (newValue < 0) newValue = 0;
                setValue(newValue);
            } else {
                newData = window.searchData.sitesConfig.map(data =>{
                    if (editTypeData.type === data.type) {
                        newType.sites=data.sites;
                        return getMinTypeData(newType);
                    }
                    return data;
                });
                setTypeData(newType);
            }
        }
        window.searchData.sitesConfig=newData;
        saveConfigToScript();
    };

    const handleDeleteType = () => {
        changeType(false);
        setTypeOpen(false);
    };

    const handleAlertOpen = (content, type) => {
        switch (type) {
            case 0:
                type = "error";
            break;
            case 1:
                type = "warning";
            break;
            case 2:
                type = "info";
            break;
            case 3:
                type = "success";
            break;
            default:
                type = "error";
            break;
        }
        setAlert({
            openAlert: true,
            alertContent: content,
            alertType: type
        });
    };

    const handleAlertClose = () => {
        setAlert({
            openAlert: false,
            alertContent: '',
            alertType: 'error'
        });
    };

    const changeTypePos = (targetType, dragType) => {
        if (targetType.type === dragType.type) return;
        let newTypes = window.searchData.sitesConfig.filter(typeData => {
            return (typeData.type !== dragType.type);
        })
        for (let i in newTypes) {
            if (newTypes[i].type === targetType.type) {
                newTypes.splice(i, 0, dragType);
                break;
            }
        }
        window.searchData.sitesConfig = newTypes;
        saveConfigToScript();
        setRefresh(true);
    };
    var dragType;

    return (
        <Box>
            <Paper elevation={5} sx={{textAlign:'center', borderRadius:'10px'}}>
                <h2 style={{padding:'5px'}}>{window.i18n('searchEngines')}</h2>
            </Paper>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', flexGrow: 1, display: 'flex' }}>
                <Tabs value={value} onChange={handleChange} aria-label="types" variant="scrollable" scrollButtons="auto">
                    {window.searchData.sitesConfig.map((data, index) =>
                        <Tab  
                            sx={{width: 65}}
                            draggable='true'
                            onDrop={e => {changeTypePos(data, dragType)}} 
                            onDragStart={e => {dragType = data}} 
                            onDragOver={e => {e.preventDefault()}} 
                            icon={
                                /^(http|data:)/.test(data.icon)?(
                                    <img alt={data.type} src={data.icon} style={{m:1, background: 'darkgray', borderRadius: '35px', width: '65px', padding: '15px', boxSizing: 'border-box'}} />
                                ):(
                                    <i style={{background: 'darkgray', lineHeight: '65px', width: '65px', fontSize: '30px', color: 'white', borderRadius: '35px'}} className={`fa fa-${data.icon}`}/>
                                )} 
                            label={data.type.slice(0, 10)} 
                            title={data.description || data.type}
                            key={index} 
                            {...a11yProps(index)} 
                        />
                    )}
                </Tabs>
                <IconButton color="primary" onClick={() => {openTypeEdit(false)}}>
                    <AddCircleOutlineIcon sx={{fontSize: '30px'}}/>
                </IconButton>
            </Box>
            {window.searchData.sitesConfig.map((data, index) =>
                <TabPanel value={value} index={index} key={data.type}>
                    <SitesList data={data} openTypeEdit={openTypeEdit} index={index} handleAlertOpen={handleAlertOpen}/>
                </TabPanel>
            )}
            <TypeEdit 
                typeOpen={editTypeOpen}
                data={editTypeData} 
                handleDeleteType={handleDeleteType} 
                handleAlertOpen={handleAlertOpen}
                changeType={changeType}
                closeHandler={() => {setTypeOpen(false)}}
            />
            <Snackbar open={alertBody.openAlert} autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={handleAlertClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handleAlertClose} severity={alertBody.alertType} sx={{ width: '100%' }} >
                  {alertBody.alertContent}
                </MuiAlert>
            </Snackbar>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Search params</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" gutterBottom component="div">
                        Example url:➡️ https://www.google.com/search?q=%s
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Param</TableCell>
                                    <TableCell align="right">Details</TableCell>
                                    <TableCell align="right">詳述</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                  key={row.param}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                      {row.param}
                                    </TableCell>
                                    <TableCell align="right">{row.infoEn}</TableCell>
                                    <TableCell align="right">{row.infoCn}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}