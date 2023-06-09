import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */

export interface TokenPairArbRoutes {
  /** Stores all of the possible hot paths for a given pair of tokens */
  arbRoutes: Route[];
  /** Token denomination of the first asset */

  tokenIn: string;
  /** Token denomination of the second asset */

  tokenOut: string;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */

export interface TokenPairArbRoutesSDKType {
  /** Stores all of the possible hot paths for a given pair of tokens */
  arb_routes: RouteSDKType[];
  /** Token denomination of the first asset */

  token_in: string;
  /** Token denomination of the second asset */

  token_out: string;
}
/** Route is a hot route for a given pair of tokens */

export interface Route {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  trades: Trade[];
}
/** Route is a hot route for a given pair of tokens */

export interface RouteSDKType {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  trades: TradeSDKType[];
}
/** Trade is a single trade in a route */

export interface Trade {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  pool: Long;
  /** The denom of token A that is traded */

  tokenIn: string;
  /** The denom of token B that is traded */

  tokenOut: string;
}
/** Trade is a single trade in a route */

export interface TradeSDKType {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  pool: Long;
  /** The denom of token A that is traded */

  token_in: string;
  /** The denom of token B that is traded */

  token_out: string;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */

export interface PoolStatistics {
  /** profits is the total profit from all trades on this pool */
  profits: Coin[];
  /** number_of_trades is the number of trades the module has executed */

  numberOfTrades: string;
  /** pool_id is the id of the pool */

  poolId: Long;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */

export interface PoolStatisticsSDKType {
  /** profits is the total profit from all trades on this pool */
  profits: CoinSDKType[];
  /** number_of_trades is the number of trades the module has executed */

  number_of_trades: string;
  /** pool_id is the id of the pool */

  pool_id: Long;
}

function createBaseTokenPairArbRoutes(): TokenPairArbRoutes {
  return {
    arbRoutes: [],
    tokenIn: "",
    tokenOut: ""
  };
}

export const TokenPairArbRoutes = {
  encode(message: TokenPairArbRoutes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.arbRoutes) {
      Route.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }

    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPairArbRoutes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPairArbRoutes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.arbRoutes.push(Route.decode(reader, reader.uint32()));
          break;

        case 2:
          message.tokenIn = reader.string();
          break;

        case 3:
          message.tokenOut = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenPairArbRoutes {
    return {
      arbRoutes: Array.isArray(object?.arbRoutes) ? object.arbRoutes.map((e: any) => Route.fromJSON(e)) : [],
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },

  toJSON(message: TokenPairArbRoutes): unknown {
    const obj: any = {};

    if (message.arbRoutes) {
      obj.arbRoutes = message.arbRoutes.map(e => e ? Route.toJSON(e) : undefined);
    } else {
      obj.arbRoutes = [];
    }

    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },

  fromPartial(object: Partial<TokenPairArbRoutes>): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arbRoutes?.map(e => Route.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }

};

function createBaseRoute(): Route {
  return {
    trades: []
  };
}

export const Route = {
  encode(message: Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Route {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Route {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromJSON(e)) : []
    };
  },

  toJSON(message: Route): unknown {
    const obj: any = {};

    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Route>): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTrade(): Trade {
  return {
    pool: Long.UZERO,
    tokenIn: "",
    tokenOut: ""
  };
}

export const Trade = {
  encode(message: Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pool.isZero()) {
      writer.uint32(8).uint64(message.pool);
    }

    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }

    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenIn = reader.string();
          break;

        case 3:
          message.tokenOut = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Trade {
    return {
      pool: isSet(object.pool) ? Long.fromValue(object.pool) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },

  toJSON(message: Trade): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = (message.pool || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },

  fromPartial(object: Partial<Trade>): Trade {
    const message = createBaseTrade();
    message.pool = object.pool !== undefined && object.pool !== null ? Long.fromValue(object.pool) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }

};

function createBasePoolStatistics(): PoolStatistics {
  return {
    profits: [],
    numberOfTrades: "",
    poolId: Long.UZERO
  };
}

export const PoolStatistics = {
  encode(message: PoolStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.numberOfTrades !== "") {
      writer.uint32(18).string(message.numberOfTrades);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolStatistics();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.numberOfTrades = reader.string();
          break;

        case 3:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolStatistics {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : [],
      numberOfTrades: isSet(object.numberOfTrades) ? String(object.numberOfTrades) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },

  toJSON(message: PoolStatistics): unknown {
    const obj: any = {};

    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.profits = [];
    }

    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<PoolStatistics>): PoolStatistics {
    const message = createBasePoolStatistics();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    message.numberOfTrades = object.numberOfTrades ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};