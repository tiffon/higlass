var remoteServer = "//higlass.io/api/v1";
var localServer = "/api/v1";
//var usedServer = localServer;
var usedServer = remoteServer;

export const testViewConfig = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    usedServer
  ],
  "exportViewUrl": "//higlass.io/api/v1/viewconfs/",
  "views": [
    {
      "uid": "aa",
      "initialXDomain": [
        0,
        3100000000
      ],
      "autocompleteSource": "//higlass.io/api/v1/suggest/?d=dd&",
      "genomePositionSearchBoxVisible": true,
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
      "tracks": {
        "top": [
          {
            "type": "horizontal-gene-annotations",
            "height": 60,
            "tilesetUid": "dd",
            "server": usedServer,
            "position": "top",
            "uid": "D00ffLKHSGqwp4r64sSU7A",
            "name": "Gene Annotations",
          },
          {
            "type": "top-axis",
            "height": 60,
            "position": "top",
            "name": "Top Axis",
          }
        ],
        "left": [
          {
            "type": "vertical-gene-annotations",
            "width": 60,
            "tilesetUid": "dd",
            "server": usedServer,
            "position": "left",
            "uid": "SVYNEiMITAe_K60zCH_7vQ",
            "name": "Gene Annotations",
            "options": {
                "labelPosition": "bottomRight"
            }
          }
        ],
        "center": [
          {
            "uid": "c1",
            "type": "combined",
            "height": 200,
            "contents": [
              {
                "uid": "hm1",
                "server": usedServer,
                "tilesetUid": "aa",
                "type": "heatmap",
                "position": "center",
                "options": {
                  "colorRange": [
                    "#FFFFFF",
                    "#F8E71C",
                    "#F5A623",
                    "#D0021B"
                  ],
                  "maxZoom": null
                },
                "name": "Dixon2015-H1_TB-HindIII-allreps-filtered.10kb.multires.cool"
              }
            ],
            "position": "center"
          }
        ],
        "right": [],
        "bottom": []
      }
    }
  ],
  "zoomLocks": {
    "locksByViewUid": {},
    "zoomLocksDict": {}
  }
};

export const deployViewConfig = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
      remoteServer
  ],
  "exportViewUrl": "/api/v1/viewconfs/",
  "views": [
    {
      "uid": "aa",
      "initialXDomain": [
        0,
        3100000000
      ],
      "autocompleteSource": "//higlass.io/api/v1/suggest/?d=dd&",
      "genomePositionSearchBoxVisible": true,
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
      "tracks": {
        "top": [
          {
            "type": "horizontal-gene-annotations",
            "height": 60,
            "tilesetUid": "dd",
            "server": remoteServer,
            "position": "top",
            "uid": "D00ffLKHSGqwp4r64sSU7A",
            "name": "Gene Annotations",
          },
          {
            "type": "top-axis",
            "height": 60,
            "position": "top",
            "name": "Top Axis",
          }
        ],
        "left": [
          {
            "type": "vertical-gene-annotations",
            "width": 60,
            "tilesetUid": "dd",
            "server": remoteServer,
            "position": "left",
            "uid": "SVYNEiMITAe_K60zCH_7vQ",
            "name": "Gene Annotations",
            "options": {
                "labelPosition": "bottomRight"
            }
          }
        ],
        "center": [
          {
            "uid": "c1",
            "type": "combined",
            "height": 200,
            "contents": [
              {
                "uid": "hm1",
                "server": remoteServer,
                "tilesetUid": "aa",
                "type": "heatmap",
                "position": "center",
                "options": {
                  "colorRange": [
                    "#FFFFFF",
                    "#F8E71C",
                    "#F5A623",
                    "#D0021B"
                  ],
                  "maxZoom": null
                },
                "name": "Dixon2015-H1_TB-HindIII-allreps-filtered.10kb.multires.cool"
              }
            ],
            "position": "center"
          }
        ],
        "right": [],
        "bottom": []
      }
    }
  ],
  "zoomLocks": {
    "locksByViewUid": {},
    "zoomLocksDict": {}
  }
};

export const localViewConfig = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
      localServer
  ],
  "exportViewUrl": localServer + "/viewconfs/",
  "views": [
    {
      "uid": "aa",
      "initialXDomain": [
        0,
        3100000000
      ],
      "autocompleteSource": localServer + "/suggest/?d=dd&",
      "genomePositionSearchBoxVisible": true,
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
      "tracks": {
        "top": [
          {
            "type": "horizontal-gene-annotations",
            "height": 60,
            "tilesetUid": "dd",
            "server": localServer,
            "position": "top",
            "uid": "D00ffLKHSGqwp4r64sSU7A",
            "name": "Gene Annotations",
          },
          {
            "type": "top-axis",
            "height": 60,
            "position": "top",
            "name": "Top Axis",
          }
        ],
        "left": [
          {
            "type": "vertical-gene-annotations",
            "width": 60,
            "tilesetUid": "dd",
            "server": localServer,
            "position": "left",
            "uid": "SVYNEiMITAe_K60zCH_7vQ",
            "name": "Gene Annotations",
            "options": {
                "labelPosition": "bottomRight"
            }
          }
        ],
        "center": [
          {
            "uid": "c1",
            "type": "combined",
            "height": 200,
            "contents": [
              {
                "uid": "hm1",
                "server": localServer,
                "tilesetUid": "aa",
                "type": "heatmap",
                "position": "center",
                "options": {
                  "colorRange": [
                    "#FFFFFF",
                    "#F8E71C",
                    "#F5A623",
                    "#D0021B"
                  ],
                  "maxZoom": null
                },
                "name": "Dixon2015-H1_TB-HindIII-allreps-filtered.10kb.multires.cool"
              }
            ],
            "position": "center"
          }
        ],
        "right": [],
        "bottom": []
      }
    }
  ],
  "zoomLocks": {
    "locksByViewUid": {},
    "zoomLocksDict": {}
  }
};