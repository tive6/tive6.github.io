jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
  {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
      //alert(jQuery.easing.default);
      return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
      return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
      return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t + b;
      return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
      return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
      return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t*t + b;
      return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
      return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
      return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
      return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
      return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
      return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
      return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
      return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
      return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
      return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
      return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
      return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
      if (t==0) return b;
      if (t==d) return b+c;
      if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
      return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
      return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
      return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
      return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
      var s=1.70158;var p=0;var a=c;
      if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
      if (a < Math.abs(c)) { a=c; var s=p/4; }
      else var s = p/(2*Math.PI) * Math.asin (c/a);
      return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
      var s=1.70158;var p=0;var a=c;
      if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
      if (a < Math.abs(c)) { a=c; var s=p/4; }
      else var s = p/(2*Math.PI) * Math.asin (c/a);
      return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
      var s=1.70158;var p=0;var a=c;
      if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
      if (a < Math.abs(c)) { a=c; var s=p/4; }
      else var s = p/(2*Math.PI) * Math.asin (c/a);
      if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
      return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
      return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
      return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
      if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
      } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
      } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
      } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
      }
    },
    easeInOutBounce: function (x, t, b, c, d) {
      if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
      return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
  }
);


(function(u) {
  u.cjTextFx = function(L) {
    function M(s, r) {
      if (v.length)
        if (s)
          for (; v.length;) A(v[0]), v.shift();
        else
          for (var u = r.length, w; u--;)
            for (w = v.length; w--;)
              if (r[u] === v[w].object) {
                A(v[w]);
                v.splice(w, 1);
                break
              }
    }

    function A(s) {
      clearTimeout(s.start);
      clearInterval(s.timer);
      for (var r = s.array; r.length;) u(r[0]).stop(!0).removeData("callback").removeData("isOut"), r.shift();
      r = u(s.object);
      r.unbind("click", s.linkHandler);
      s.restore && (r.empty(), r.html(s.html));
      r.css("visibility", "hidden")
    }
    var v = [];
    u.cjTextFx.animate = function(s, r) {
      function A(a) {
        for (var b in a) a.hasOwnProperty(b) && (p[b] = a[b]);
        w()
      }

      function w() {
        F = "in" === p.animationType.toLowerCase() ? !0 : !1;
        h = p.onComplete;
        G = p.onStart;
        N = p.onCompleteParams;
        O = p.onStartParams;
        P = p.linkTarget;
        H = p.hyperlink;
        k = p.sequenceDelay;
        I = p.startDelay;
        n = p.offsetX;
        j = p.offsetY;
        x = p.animation;
        d = p.easing;
        e = p.speed
      }

      function U() {
        var d = p.backwards,
          e = q;
        if (11 === x || 12 === x || 14 === x) {
          var g = [],
            h;
          for (h = 0; h < q; h++) g[h] = b[h];
          for (b = []; 0 < g.length;) h = Math.random() * g.length | 0, b[b.length] = g[h], g.splice(h, 1)
        }
        for (; e--;) f[e] = b[e].offset().left - Q;
        if (F) switch (x) {
          case 1:
            d ? (a = l, c = setInterval(V, k)) : c = setInterval(W, k);
            break;
          case 2:
            d ? (a = l, c = setInterval(X, k)) : c = setInterval(Y, k);
            break;
          case 3:
            d ? (a = l, c = setInterval(Z, k)) : c = setInterval($, k);
            break;
          case 4:
            d ? (a = l, c = setInterval(aa, k)) : c = setInterval(ba, k);
            break;
          case 5:
            d ? (a = l, c = setInterval(ca, k)) : c = setInterval(da, k);
            break;
          case 6:
            d ? (a = l, c = setInterval(ea, k)) : c = setInterval(fa, k);
            break;
          case 7:
            d ? (a = l, c = setInterval(ga, k)) : c = setInterval(ha, k);
            break;
          case 8:
            d ? (a = l, c = setInterval(ia, k)) : c = setInterval(ja, k);
            break;
          case 9:
            d ? (a = l, c = setInterval(ka, k)) : c = setInterval(la, k);
            break;
          case 10:
            d ? (a = l, c = setInterval(ma, k)) : c = setInterval(na, k);
            break;
          case 11:
            c = setInterval(oa, k);
            break;
          case 12:
            for (e = q; e--;) 0 === e % 2 ? b[e].css({
              position: "absolute",
              left: f[e] + Math.random() * n | 0,
              top: Math.random() * -j | 0
            }) : b[e].css({
              position: "absolute",
              left: f[e] + Math.random() * -n | 0,
              top: Math.random() * j | 0
            });
            c = setInterval(pa, k);
            break;
          case 13:
            d ? (a = l, c = setInterval(qa, k)) : c = setInterval(R, k);
            break;
          case 14:
            c = setInterval(R, k);
            break;
          case 15:
            d ? (a = l, c = setInterval(ra, k)) : c = setInterval(sa, k)
        } else {
          for (e = q; e--;) b[e].css({
            position: "absolute",
            left: f[e],
            top: 0
          });
          switch (x) {
            case 1:
              d ? (a = l, c = setInterval(ta, k)) : c = setInterval(ua, k);
              break;
            case 2:
              d ? (a = l, c = setInterval(va, k)) : c = setInterval(wa, k);
              break;
            case 3:
              d ? (a = l, c = setInterval(xa, k)) : c = setInterval(ya, k);
              break;
            case 4:
              d ? (a = l, c = setInterval(za, k)) : c = setInterval(Aa, k);
              break;
            case 5:
              d ? (a = l, c = setInterval(Ba, k)) : c = setInterval(Ca, k);
              break;
            case 6:
              d ? (a = l, c = setInterval(Da, k)) : c = setInterval(Ea, k);
              break;
            case 7:
              d ? (a = l, c = setInterval(Fa, k)) : c = setInterval(Ga, k);
              break;
            case 8:
              d ? (a = l, c = setInterval(Ha, k)) : c = setInterval(Ia, k);
              break;
            case 9:
              d ? (a = l, c = setInterval(Ja, k)) : c = setInterval(Ka, k);
              break;
            case 10:
              d ? (a = l, c = setInterval(La, k)) : c = setInterval(Ma, k);
              break;
            case 11:
              c = setInterval(Na, k);
              break;
            case 12:
              c = setInterval(Oa, k);
              break;
            case 13:
              d ? (a = l, c = setInterval(S, k)) : c = setInterval(Pa, k);
              break;
            case 14:
              a = l;
              c = setInterval(S, k);
              break;
            case 15:
              d ? (a = l, c = setInterval(Qa, k)) : c = setInterval(Ra, k)
          }
        }
        G && (C = setTimeout(Sa, k));
        for (e = v.length; e--;)
          if (v[e].id === D) {
            v[e].timer = c;
            v[e].start = C;
            break
          }
        D = p = null
      }

      function T() {
        "_parent" === P ? window.location = H : window.open(H)
      }

      function Sa() {
        G(O)
      }

      function m() {
        h(N)
      }

      function g() {
        J && u(this).data("isOut") && u(this).get(0).style.removeAttribute("filter");
        u(this).data("callback") && u(this).data("callback")()
      }

      function W() {
        a < q ? (h && a === l && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a] + n,
          top: 0,
          visibility: "visible"
        }).animate({
          left: f[a],
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function V() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a] - n,
          top: 0,
          visibility: "visible"
        }).animate({
          left: f[a],
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function ta() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          left: f[a] + n,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function ua() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          left: f[a] - n,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function Y() {
        a < q ? (h && a === l && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a],
          top: -j,
          visibility: "visible"
        }).animate({
          top: 0,
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function X() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a],
          top: -j,
          visibility: "visible"
        }).animate({
          top: 0,
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function va() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          top: -j,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function wa() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          top: -j,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function $() {
        a < q ? (h && a === l && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a],
          top: j,
          visibility: "visible"
        }).animate({
          top: 0,
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function Z() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a],
          top: j,
          visibility: "visible"
        }).animate({
          top: 0,
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function xa() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          top: j,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function ya() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          top: j,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function ba() {
        a < q ? (h && a === l && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a] + n,
          top: -j,
          visibility: "visible"
        }).animate({
          top: 0,
          left: f[a],
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function aa() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a] + n,
          top: -j,
          visibility: "visible"
        }).animate({
          top: 0,
          left: f[a],
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function za() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          left: f[a] + n,
          top: -j,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function Aa() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          left: f[a] + n,
          top: -j,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function da() {
        h && a === l && b[a].data("callback", m);
        a < q ? (b[a].css({
          position: "absolute",
          left: f[a] + n,
          top: j,
          visibility: "visible"
        }).animate({
          top: 0,
          left: f[a],
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function ca() {
        h && 0 === a && b[a].data("callback", m); - 1 < a ? (b[a].css({
          position: "absolute",
          left: f[a] + n,
          top: j,
          visibility: "visible"
        }).animate({
          top: 0,
          left: f[a],
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ba() {
        h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }); - 1 < a ? (b[a].animate({
          left: f[a] + n,
          top: j,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ca() {
        h && a === l && b[a].data({
          callback: m,
          isOut: !0
        });
        a < q ? (b[a].animate({
          left: f[a] + n,
          top: j,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function fa() {
        a < q ? (h && a === l && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a] - n,
          top: -j,
          visibility: "visible"
        }).animate({
          top: 0,
          left: f[a],
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function ea() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a] - n,
          top: -j,
          visibility: "visible"
        }).animate({
          top: 0,
          left: f[a],
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function Da() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          left: f[a] - n,
          top: -j,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ea() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          left: f[a] - n,
          top: -j,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function ha() {
        h && a === l && b[a].data("callback", m);
        a < q ? (b[a].css({
          position: "absolute",
          left: f[a] - n,
          top: j,
          visibility: "visible"
        }).animate({
          top: 0,
          left: f[a],
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function ga() {
        h && 0 === a && b[a].data("callback", m); - 1 < a ? (b[a].css({
          position: "absolute",
          left: f[a] - n,
          top: j,
          visibility: "visible"
        }).animate({
          top: 0,
          left: f[a],
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function Fa() {
        h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }); - 1 < a ? (b[a].animate({
          left: f[a] - n,
          top: j,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ga() {
        h && a === l && b[a].data({
          callback: m,
          isOut: !0
        });
        a < q ? (b[a].animate({
          left: f[a] - n,
          top: j,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function ja() {
        a < q ? (h && a === l && b[a].data("callback", m), 0 === a % 2 ? b[a].css({
          position: "absolute",
          left: f[a],
          top: j,
          visibility: "visible"
        }).animate({
          top: 0,
          opacity: 1
        }, e, d, g) : b[a].css({
          position: "absolute",
          left: f[a],
          top: -j,
          visibility: "visible"
        }).animate({
          top: 0,
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function ia() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), 0 === a % 2 ? b[a].css({
          position: "absolute",
          left: f[a],
          top: j,
          visibility: "visible"
        }).animate({
          top: 0,
          opacity: 1
        }, e, d, g) : b[a].css({
          position: "absolute",
          left: f[a],
          top: -j,
          visibility: "visible"
        }).animate({
          top: 0,
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ha() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), 0 === a % 2 ? b[a].animate({
          top: j,
          opacity: 0
        }, e, d, g) : b[a].animate({
          top: -j,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ia() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), 0 === a % 2 ? b[a].animate({
          top: j,
          opacity: 0
        }, e, d, g) : b[a].animate({
          top: -j,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function la() {
        a < q ? (h && a === l && b[a].data("callback", m), 0 === a % 2 ? b[a].css({
          position: "absolute",
          left: f[a] + n,
          top: j,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g) : b[a].css({
          position: "absolute",
          left: f[a] + n,
          top: -j,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function ka() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), 0 === a % 2 ? b[a].css({
          position: "absolute",
          left: f[a] + n,
          top: j,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g) : b[a].css({
          position: "absolute",
          left: f[a] + n,
          top: -j,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ja() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), 0 === a % 2 ? b[a].animate({
          left: f[a] + n,
          top: j,
          opacity: 0
        }, e, d, g) : b[a].animate({
          left: f[a] + n,
          top: -j,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ka() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), 0 === a % 2 ? b[a].animate({
          left: f[a] + n,
          top: j,
          opacity: 0
        }, e, d, g) : b[a].animate({
          left: f[a] + n,
          top: -j,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function na() {
        a < q ? (h && a === l && b[a].data("callback", m), 0 === a % 2 ? b[a].css({
          position: "absolute",
          left: f[a] - n,
          top: j,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g) : b[a].css({
          position: "absolute",
          left: f[a] - n,
          top: -j,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function ma() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), 0 === a % 2 ? b[a].css({
          position: "absolute",
          left: f[a] - n,
          top: j,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g) : b[a].css({
          position: "absolute",
          left: f[a] - n,
          top: -j,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function La() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), 0 === a % 2 ? b[a].animate({
          left: f[a] - n,
          top: j,
          opacity: 0
        }, e, d, g) : b[a].animate({
          left: f[a] - n,
          top: -j,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ma() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), 0 === a % 2 ? b[a].animate({
          left: f[a] - n,
          top: j,
          opacity: 0
        }, e, d, g) : b[a].animate({
          left: f[a] - n,
          top: -j,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function oa() {
        a < q ? (h && a === l && b[a].data("callback", m), 0 === a % 2 ? b[a].css({
          position: "absolute",
          left: f[a] + Math.random() * n | 0,
          top: Math.random() * -j | 0,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g) : b[a].css({
          position: "absolute",
          left: f[a] + Math.random() * -n | 0,
          top: Math.random() * j | 0,
          visibility: "visible"
        }).animate({
          left: f[a],
          top: 0,
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function Na() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), 0 === a % 2 ? b[a].animate({
          left: f[a] + Math.random() * n | 0,
          top: Math.random() * -j | 0,
          opacity: 0
        }, e, d, g) : b[a].animate({
          left: f[a] + Math.random() * -n | 0,
          top: Math.random() * j | 0,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function pa() {
        a < q ? (h && a === l && b[a].data("callback", m), b[a].animate({
          left: f[a],
          top: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function Oa() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), 0 === a % 2 ? b[a].animate({
          left: f[a] + Math.random() * n | 0,
          top: Math.random() * -j | 0
        }, e, d, g) : b[a].animate({
          left: f[a] + Math.random() * -n | 0,
          top: Math.random() * j | 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function R() {
        a < q ? (h && a === l && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a],
          top: 0,
          visibility: "visible"
        }).animate({
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function qa() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), b[a].css({
          position: "absolute",
          left: f[a],
          top: 0,
          visibility: "visible"
        }).animate({
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function S() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function Pa() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }

      function sa() {
        a < q ? (h && a === l && b[a].data("callback", m), E = b[a].height(), b[a].css({
          position: "absolute",
          left: f[a],
          top: 0,
          height: 0,
          visibility: "visible"
        }).animate({
          height: E,
          opacity: 1
        }, e, d, g), a++) : clearInterval(c)
      }

      function ra() {
        -1 < a ? (h && 0 === a && b[a].data("callback", m), E = b[a].height(), b[a].css({
          position: "absolute",
          left: f[a],
          top: 0,
          height: 0,
          visibility: "visible"
        }).animate({
          height: E,
          opacity: 1
        }, e, d, g), a--) : clearInterval(c)
      }

      function Qa() {
        -1 < a ? (h && 0 === a && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          height: 0,
          opacity: 0
        }, e, d, g), a--) : clearInterval(c)
      }

      function Ra() {
        a < q ? (h && a === l && b[a].data({
          callback: m,
          isOut: !0
        }), b[a].animate({
          height: 0,
          opacity: 0
        }, e, d, g), a++) : clearInterval(c)
      }
      var N, O, h, P, H, t, F, Q, n, j, C, G, d, k, I, e, x, a, K, B, E, c, l, f, D, q, y, b, z, p = {};
      t = navigator.userAgent.toLowerCase();
      var J = -1 !== t.search("msie");
      J && (J = 9 > parseFloat(t.substr(t.indexOf("msie") + 4)));

      p.animation = 1;
      p.animationType = "in";
      p.backwards = !1;
      p.easing = "easeOutQuint";
      p.sequenceDelay = 100;
      p.startDelay = 0;
      p.speed = 1E3;
      p.offsetX = 100;
      p.offsetY = 50;
      p.color = "#000";
      p.linked = !1;
      p.hyperlink = null;
      p.linkTarget = null;
      p.onComplete = null;
      p.onStart = null;
      p.onCompleteParams = null;
      p.onStartParams = null;
      p.restoreHTML = !0;
      w();
      L && A(L);
      r && A(r);
      t = u(s);
      if (t.length && !(1 < t.length)) {
        M(!1, [s]);
        Q = t.offset().left | 0;
        f = [];
        b = [];
        a = 0;
        p.linked && t.css("cursor", "pointer").click(T);
        t.css({
          color: p.color,
          height: t.height(),
          visibility: "visible",
          display: "block"
        });
        K = t.html();
        y = K.replace(/<\/?[^>]+>/igm, "");
        y = y.replace(/^\s+|\s+$/g, "");
        t.empty();
        q = y.length;
        l = q - 1;
        for (z = 0; z < q; z++) B = y.charAt(z), " " === B && (B = "&nbsp;"), span = u("<span class='inner-span' />").html(B).appendTo(t), 12 !== x && F && span.css({
          opacity: 0,
          visibility: "hidden"
        }), b[z] = span;
        C = setTimeout(U, 0 === I ? 100 : I);
        D = Math.random();
        v[v.length] = {
          object: s,
          id: D,
          html: K,
          start: C,
          array: b,
          linkHandler: T,
          restore: p.restoreHTML
        };
        z = y = B = t = null
      }
    };
    u.cjTextFx.remove = function(s, r) {
      M(s, r)
    }
  }
})(jQuery);


$(function(){
  var isOn = 1, $wrap = "#subtitle", settings = {
    animation:3, //动画方式 从1-15 每个数字代表一个动画 请自测效果
    animationType: "in",//显示方式 in 和out 参数，in代表入场,out代表出场
    backwards: false, //改变动画显示方向，默认false 设为true 动画将从后往前倒序播放
    easing: "easeOutQuint", //这里的效果 可以参见http://code.ciaoca.com/jquery/easing/
    speed: 1000, //动画帧速 即在指定时间内完成动画
    sequenceDelay: 100, //场景延迟  即执行完上一个动画后，等待指定时间继续执行下一动画
    startDelay: 0, //开始延迟，即执行当前动画时，等待指定时间后再开始
    offsetX: 100,//动画元素 x坐标偏移量
    offsetY: 50,//动画元素 Y坐标偏移量
    onComplete: twiceRun, //回调函数 即 执行完动画后，需要执行的回调方法
    restoreHTML: true  //重置元素 即重复播放两次该动画 类似于此效果 默认true
  }, opts = {
    animation: 1,
    animationType: "in",
    speed: 1000,
    // 效果参数：http://code.ciaoca.com/jquery/easing/
    easing: "easeOutBounce", // easeOutQuint easeInQuint easeInBack easeOutBounce
    restoreHTML: true,
    backwards: false, // 文字从右向左展示
  }
  var easingList = [
    'easeInBounce',
    'easeOutQuint',
    'easeInQuint',
    'easeInBack',
    'easeOutBounce',
  ]
  function twiceRun() {
    isOn ++
    if (isOn>15) isOn = 1
    var timer = setTimeout(function(){
      opts.animation = isOn
      opts.easing = easingList[isOn%5]
      opts.backwards = Math.random()>0.6
      opts.animationType = opts.animationType==='in'?'out':'in'
      $.cjTextFx(settings);
      $.cjTextFx.animate($wrap, opts);
      clearTimeout(timer)
    }, 2000)
  }
  $.cjTextFx(settings);
  $.cjTextFx.animate($wrap, opts);
})